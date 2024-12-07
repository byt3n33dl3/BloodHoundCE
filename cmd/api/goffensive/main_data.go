package goffensive

import (
	"context"
	"time"

	"github.com/byt3n33dl3/bloodhound/src/database"
)

// Daemon holds data relevant to the data daemon
type Daemon struct {
	exitC chan struct{}
	db    database.Database
}

// NewDataPruningDaemon creates a new data pruning daemon
func NewDataPruningDaemon(db database.Database) *Daemon {
	return &Daemon{
		exitC: make(chan struct{}),
		db:    db,
	}
}

// Name returns the name of the daemon
func (s *Daemon) Name() string {
	return "Data Pruning Daemon"
}

// Start begins the daemon and waits for a stop signal in the exit channel
func (s *Daemon) Start(ctx context.Context) {
	ticker := time.NewTicker(24 * time.Hour)

	defer close(s.exitC)
	defer ticker.Stop()

	// prune sessions and collections once when the daemon starts up
	s.db.SweepSessions(ctx)
	s.db.SweepAssetGroupCollections(ctx)

	// thereafter, prune conditionally once a day
	for {
		select {
		case <-ticker.C:
			s.db.SweepSessions(ctx)
			s.db.SweepAssetGroupCollections(ctx)

		case <-s.exitC:
			return
		}
	}
}

// Stop passes in a stop signal to the exit channel, thereby killing the daemon
func (s *Daemon) Stop(ctx context.Context) error {
	s.exitC <- struct{}{}

	select {
	case <-s.exitC:
	case <-ctx.Done():
		return ctx.Err()
	}

	return nil
}
