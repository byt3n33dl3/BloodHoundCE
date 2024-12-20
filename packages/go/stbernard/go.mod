module github.com/byt3n33dl3/bloodhound/packages/go/stbernard

go 1.23

require (
	github.com/Masterminds/semver/v3 v3.2.1
	github.com/gofrs/uuid v4.4.0+incompatible
	github.com/byt3n33dl3/bloodhound/log v0.0.0-00010101000000-000000000000
	github.com/byt3n33dl3/bloodhound/slicesext v0.0.0-00010101000000-000000000000
	github.com/stretchr/testify v1.9.0
	golang.org/x/mod v0.21.0
)

require (
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/kr/text v0.2.0 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.19 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/rs/zerolog v1.29.1 // indirect
	golang.org/x/sys v0.28.0 // indirect
	golang.org/x/tools v0.26.0
	gopkg.in/yaml.v3 v3.0.1 // indirect
)

replace (
	github.com/byt3n33dl3/bloodhound/log => ../log
	github.com/byt3n33dl3/bloodhound/slicesext => ../slicesext
)