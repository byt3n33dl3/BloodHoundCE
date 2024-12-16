<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="cmd/ui/public/img/bhe.png">
        <img src="cmd/ui/public/img/bhe.png" alt="BloodHound Community Edition" width='450' />
    </picture>
</p>

<div align="center">
<h2>BloodHound Enterprise</h2>
Six Degrees of Enterprise Domain Admin
<p></div>

<p align="center">
  <a href="#bloodhound">About</a> •
  <a href="#how-does-it-exec-">Exec</a> •
  <a href="#deploy-bloodhound">Deploy</a> •
  <a href="#credits--main">Main</a>
</p>

# BloodHound

BloodHound is a monolithic web application composed of an embedded React frontend with [Sigma.js](https://www.sigmajs.org/) and a [C#](https://csharp.net/) with [Go](https://go.dev/) based REST API backend. It is deployed with a [PostgreSQL](https://www.postgresql.org/) application database and a [Neo4J](https://neo4j.com/) graph database, and is fed by the [SharpHound](https://github.com/BloodHoundAD/SharpHound), or [SharpHoundAD](https://github.com/byt3n33dl3/SharpHoundAD), and [AzureHoundAD](https://github.com/byt3n33dl3/AzureHoundAD) or [AzureHound](https://github.com/BloodHoundAD/AzureHound) data collectors.

## How does it `Exec` ?
It Uses graph theory to reveal the hidden and often unintended relationships within an Active Directory or Azure environment. Attackers can use BloodHound to quickly identify highly complex attack paths that would otherwise be impossible to find.

BloodHound is created and maintained by the BloodHound [Enterprise](https://bloodhoundenterprise.io) Team. The original BloodHound was created by [@wald0](https://www.twitter.com/_wald0), [@rvazarkar](https://twitter.com/CptJesus), [@byt3n33dl3](https://twitter.com/byt3n33dl3), and [@harmj0y](https://twitter.com/harmj0y).

## Running BloodHound Community Edition
Docker Compose is the easiest way to get up and running with BloodHound. Instructions below describe how to install and upgrade your deployment.

## Extra Overview

> [!TIP]
> Easy, Reliable, Effective Map, Prioritize, and Remediate Identity Attack Paths Management.

> [!NOTE]
> See your `Organization` from the Attacker’s view, an Attack Path Management solution quantifies identity Attack Paths in Active Directory and Azure Environments.

## Deploy BloodHound
Deploying BloodHound quickly with the following steps:

>- Install Docker [Desktop](https://www.docker.com/products/docker-desktop/).

Docker Desktop includes Docker Compose as part of the installation.

>- Download the Docker Compose YAML [file](examples/docker-compose/docker-compose.yml)

Save it to a directory where you'd like to run BloodHound. You can do this from a terminal application with 

```
curl -L https://s.id/getbhe
```

> [!WARNING]
> *NOTE:* If the option is unavailable, please go EXECUTE this one `curl -L https://ghst.ly/getbhce`

**Minimum specifications:**

- 4GB to 6GB of RAM
- 4 processor cores
- 10GB hard Disk space

>- On Windows: Execute the command

in CMD, or use `curl.exe` instead of `curl` in PowerShell.

>- Navigate to the folder

with the saved `docker-compose.yml` file and run `docker compose pull && docker compose up`.

>- Locate 

The randomly generated password in the terminal output of Docker Compose.

>- In a browser

Navigate to `http://localhost:8080/ui/login`. Login with a username of `admin` and the randomly generated password from the logs.

*NOTE: The default `docker-compose.yml` example binds only to localhost (127.0.0.1). If you want to access BloodHound outside of localhost, you'll need to follow the instructions in [README.md](examples/docker-compose/README.md) to configure the host binding for the container.*

## Installation Error Handling

- If you encounter a "failed to get console mode for stdin: The handle is invalid." ensure Docker Desktop (and associated Engine is running). Docker Desktop does not automatically register as a startup entry.

- If you encounter an "Error response from daemon: Ports are not available: exposing port *TCP 127.0.0.1:7474 -> 0.0.0.0:0:* listen tcp *127.0.0.1:7474: bind:* Only one usage of each socket address (protocol/network address/port) is normally permitted." this is normally attributed to the "Neo4J Graph Database - Neo4j" service already running on your `local` system. Please stop or delete the service to continue.

```
# Verify if Docker Engine is Running
docker info

# Attempt to stop Neo4j Service if running (on Windows)
Stop-Service "Neo4j" -ErrorAction SilentlyContinue
```

<h2>BloodExec</h2>
The Enterprise for Yacht
<p></div>

<p align="center">
  <a href="#enterprise">Management</a> •
  <a href="#upgrade-bloodhound">Upgrade Kit</a>
</p>

# [Enterprise](https://github.com/byt3n33dl3/BloodHound)

BloodHound [Enterprise](https://bloodhoundenterprise.io/) is an Attack Path Management solution that continuously maps and quantifies Active Directory Attack Paths. You can remove millions, even `billions` of Attack Paths within your existing architecture and eliminate the Attacker’s easiest, most reliable, and most Attractive techniques.

*Running the Neo4j database:*

The installation manual will have taken you through an installation of Neo4j, the `Database` hosting the BloodHound datasets. 

```
sudo neo4j start
```

## Upgrade BloodHound
Once installed, upgrade BloodHound to the latest version with the following steps:

>- Navigate to the folder

with the saved `docker compose.yml` file and run `docker compose pull && docker compose up`.

>- In a browser

navigate to `http://localhost:8080` and log in with your previously configured username and password.

## Importing sample data

The BloodHound team has provided some sample data for testing BloodHound without performing a SharpHound or AzureHound collection. That data may be found [here](https://github.com/byt3n33dl3/BloodHound/wiki/Example-Data).

## License from `@SpecterOps`

>- Apache License 2.0

## Licenses from `@GangstaCrew`

>- BSD-2-Clause License & AGPL 3.0

Unless otherwise annotated by a lower-level LICENSE file or license header, all files in this repository are released
under the `Apache-2.0` license. A full copy of the license may be found in the top level [LICENSE](LICENSE) file.

## Useful Links

- [BloodHound Slack](https://ghst.ly/BHSlack)
- [Wiki Page](https://github.com/byt3n33dl3/BloodHound/wiki)
- [Contributors](./CONTRIBUTORS.md)
- [Docker Compose](./examples/docker-compose/README.md)
- Enterprise [Docs](https://support.bloodhoundenterprise.io/)
- [Developer Guide](https://github.com/byt3n33dl3/BloodHound/wiki/Development)
- Contributing [Guide](https://github.com/byt3n33dl3/BloodHound/wiki/Contributing)

# Credits / `main`
- SpecterOps
    - [BloodHoundAD](https://github.com/BloodHoundAD/)
- Gangstacrew
- [OceanExec](https://github.com/OceanExec/)

<p align="left">
<a href="https://github.com/byt3n33dl3"><img src="https://avatars.githubusercontent.com/u/151133481?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/chrismaddalena"><img src="https://avatars.githubusercontent.com/u/10526228?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/AD7ZJ"><img src="https://avatars.githubusercontent.com/u/1594845?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/Palt"><img src="https://avatars.githubusercontent.com/u/8233942?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/OceanExec"><img src="https://avatars.githubusercontent.com/u/171657497?s=200&v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/BloodHoundAD"><img src="https://bloodhound.readthedocs.io/en/latest/_images/bloodhound-logo.png" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/superlinkx"><img src="https://avatars.githubusercontent.com/u/466326?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/rvazarkar"><img src="https://avatars.githubusercontent.com/u/5720446?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/mistahj67"><img src="https://avatars.githubusercontent.com/u/26472282?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/SpecterOps"><img src="https://avatars.githubusercontent.com/u/25406560?s=200&v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/benwaples"><img src="https://avatars.githubusercontent.com/u/66393111?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/GhostPack"><img src="https://avatars.githubusercontent.com/u/41304335?s=200&v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/github"><img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/HarmJ0y"><img src="https://avatars.githubusercontent.com/u/5504523?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/Scoubi"><img src="https://avatars.githubusercontent.com/u/7934465?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/Azure"><img src="https://avatars.githubusercontent.com/u/6844498?s=200&v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/elikmiller"><img src="https://avatars.githubusercontent.com/u/1761629?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/sircodemane"><img src="https://avatars.githubusercontent.com/u/6968902?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/codingo"><img src="https://avatars.githubusercontent.com/u/886344?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/mitmedialab"><img src="https://avatars.githubusercontent.com/u/7405700?s=200&v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/prodigysml"><img src="https://avatars.githubusercontent.com/u/16996819?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/sqlmapproject"><img src="https://avatars.githubusercontent.com/u/735289?s=200&v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/jvoisin"><img src="https://avatars.githubusercontent.com/u/325724?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/stamparm"><img src="https://avatars.githubusercontent.com/u/921555?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/Mjoeman98"><img src="https://avatars.githubusercontent.com/u/184496841?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/maffkipp"><img src="https://avatars.githubusercontent.com/u/16313351?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/houssem98"><img src="https://avatars.githubusercontent.com/u/35746965?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/e11i0t4lders0n"><img src="https://avatars.githubusercontent.com/u/76389721?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
<a href="https://github.com/brandonshearin"><img src="https://avatars.githubusercontent.com/u/23143242?v=4" width="40" height="40" alt="" style="max-width: 100%;"></a>
</p>
