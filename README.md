<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="cmd/ui/public/img/logo-secondary-transparent-full.svg">
        <img src="cmd/ui/public/img/logo-transparent-full.svg" alt="BloodHound Community Edition" width='400' />
    </picture>
</p>

<hr />

**BloodHoundCE** is a monolithic web application composed of an embedded React frontend with [Sigma.js](https://www.sigmajs.org/) and a [Go](https://go.dev/) based REST API backend. It is deployed with a [Postgresql](https://www.postgresql.org/) application database and a [Neo4j](https://neo4j.com/) graph database, and is fed by the [SharpHound](https://github.com/BloodHoundAD/SharpHound), [BreedHoundAD](https://github.com/pxcs/BreedHoundAD), and [AzureHound](https://github.com/BloodHoundAD/AzureHound) data collectors.

**BloodHoundCE** uses graph theory to reveal the hidden and often unintended relationships within an Active Directory or Azure environment. Attackers can use **BloodHoundCE** to quickly identify highly complex attack paths that would otherwise be impossible to find. Defenders can use **BloodHoundCE** to identify and eliminate those same attack paths. Both red and blue teams can use **BloodHoundCE** to better understand privileged relationships in an Active Directory or Azure environment.

**BloodHoundCE** is created and maintained by the BloodHound [Enterprise](https://bloodhoundenterprise.io) Team. The original BloodHound was created by [@wald0](https://www.twitter.com/_wald0), [@CptJesus](https://twitter.com/CptJesus), and [@harmj0y](https://twitter.com/harmj0y).

## Running BloodHound Community Edition
Docker Compose is the easiest way to get up and running with BloodHound CE. Instructions below describe how to install and upgrade your deployment.

## Deploy BloodHoundCE
Deploying **BloodHoundCE** quickly with the following steps:

>- Install Docker [Desktop](https://www.docker.com/products/docker-desktop/). Docker Desktop includes Docker Compose as part of the installation.

>- Download the Docker Compose YAML [file](examples/docker-compose/docker-compose.yml) and save it to a directory where you'd like to run **BloodHoundCE**. You can do this from a terminal application with `curl -L https://ghst.ly/getbhce`.

> On Windows: Execute the command in CMD, or use `curl.exe` instead of `curl` in PowerShell.

>- Navigate to the folder with the saved `docker-compose.yml` file and run `docker compose pull && docker compose up`.

>- Locate the randomly generated password in the terminal output of Docker Compose.

>- In a browser, navigate to `http://localhost:8080/ui/login`. Login with a username of `admin` and the randomly generated password from the logs.

*NOTE: The default `docker-compose.yml` example binds only to localhost (127.0.0.1). If you want to access BloodHound outside of localhost, you'll need to follow the instructions in examples/docker-compose/[README.md](examples/docker-compose/README.md) to configure the host binding for the container.*

## Upgrade BloodHoundCE
Once installed, upgrade **BloodHoundCE** to the latest version with the following steps:

>- Navigate to the folder with the saved `docker-compose.yml` file and run `docker compose pull && docker compose up`.

>- In a browser, navigate to `http://localhost:8080/ui/login` and log in with your previously configured username and password.

## Importing sample data

The **BloodHoundCE** team has provided some sample data for testing **BloodHoundCE** without performing a SharpHound or AzureHound collection. That data may be found [here](https://github.com/pxcs/BloodHoundCE/wiki/Example-Data).

## Installation Error Handling

- If you encounter a "failed to get console mode for stdin: The handle is invalid." ensure Docker Desktop (and associated Engine is running). Docker Desktop does not automatically register as a startup entry.

- If you encounter an "Error response from daemon: Ports are not available: exposing port TCP 127.0.0.1:7474 -> 0.0.0.0:0: listen tcp 127.0.0.1:7474: bind: Only one usage of each socket address (protocol/network address/port) is normally permitted." this is normally attributed to the "Neo4J Graph Database - neo4j" service already running on your local system. Please stop or delete the service to continue.

```js
# Verify if Docker Engine is Running
docker info

# Attempt to stop Neo4j Service if running (on Windows)
Stop-Service "Neo4j" -ErrorAction SilentlyContinue
```

## Successful installation 
of **BloodHoundCE** can be seen on SpecterOps BloodHoundCE [repo](https://github.com/SpecterOps/BloodHound/)

## Useful Links

- [BloodHound Slack](https://ghst.ly/BHSlack)
- [Wiki](https://github.com/SpecterOps/BloodHound/wiki)
- [Contributors](./CONTRIBUTORS.md)
- [Docker Compose Example](./examples/docker-compose/README.md)
- [BloodHound Docs](https://support.bloodhoundenterprise.io/)
- [Developer Quick Start Guide](https://github.com/SpecterOps/BloodHound/wiki/Development)
- [Contributing Guide](https://github.com/SpecterOps/BloodHound/wiki/Contributing)

## Contact

Please check out the Contact [page](https://github.com/SpecterOps/BloodHound/wiki/Contact) in our wiki for details on how to reach out with questions and suggestions.

## Licensing from SpecterOps

>- Apache License 2.0

## Licensing from GangstaCrew

>- BSD-2-Clause License

Unless otherwise annotated by a lower-level LICENSE file or license header, all files in this repository are released
under the `Apache-2.0` license. A full copy of the license may be found in the top-level [LICENSE](LICENSE) file.

# Thanks To
- SpecterOps
- GangstaCrew
- BloodHoundAD
