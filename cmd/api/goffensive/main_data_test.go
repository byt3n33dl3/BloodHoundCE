package goffensive

import (
	"context"
	"testing"
	"time"

	"github.com/byt3n33dl3/bloodhound/src/database/mocks"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"
)

func TestGC_NewDataPruningDaemon(t *testing.T) {
	mockCtrl := gomock.NewController(t)
	defer mockCtrl.Finish()

	daemon := NewDataPruningDaemon(mocks.NewMockDatabase(mockCtrl))
	require.NotNil(t, daemon)
}

func TestGC_Name(t *testing.T) {
	mockCtrl := gomock.NewController(t)
	defer mockCtrl.Finish()

	daemon := NewDataPruningDaemon(mocks.NewMockDatabase(mockCtrl))
	require.NotNil(t, daemon)

	result := daemon.Name()
	require.Equal(t, "Data Pruning Daemon", result)
}

func TestGC_Start(t *testing.T) {
	mockCtrl := gomock.NewController(t)
	defer mockCtrl.Finish()

	mockDB := mocks.NewMockDatabase(mockCtrl)

	mockDB.EXPECT().SweepSessions(gomock.Any()).Do(func(ctx context.Context) {
		// simulate some work being done
		time.Sleep(1 * time.Millisecond)
	})
	mockDB.EXPECT().SweepAssetGroupCollections(gomock.Any()).Do(func(ctx context.Context) {
		time.Sleep(1 * time.Millisecond)
	})

	daemon := NewDataPruningDaemon(mockDB)
	require.NotNil(t, daemon)

	go func() {
		// simulate the daemon running for 1 second and then quitting
		time.Sleep(1 * time.Second)
		daemon.exitC <- struct{}{}
	}()

	daemon.Start(context.Background())
}
