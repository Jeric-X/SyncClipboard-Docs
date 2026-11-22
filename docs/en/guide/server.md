# SyncClipboard server

Use the built-in desktop server for devices on the same LAN. For access while your desktop is off, run a standalone server on an always-on machine or NAS. Choose **SyncClipboard Server** in the clients for either setup. Both support the current clipboard and history sync. You can also [use an existing WebDAV or S3 service](./storage).

## Built-in desktop server

On the desktop app’s Server page, set a username, password and port, then enable the server. Other devices connect to the host computer’s LAN address and port. To sync the host computer’s own clipboard, add an account under Syncing and enable clipboard sync. [Connect a computer and phone](./getting-started)

## Run the standalone server with Docker

Create a directory on the host and save the following as `compose.yaml`. In the same directory, create a `.env` file with `SYNCCLIPBOARD_USERNAME` and `SYNCCLIPBOARD_PASSWORD` on separate lines in `NAME=value` format.

```yaml
services:
  syncclipboard:
    image: jericx/syncclipboard-server:latest
    restart: unless-stopped
    ports:
      - "5033:5033"
    environment:
      SYNCCLIPBOARD_USERNAME: ${SYNCCLIPBOARD_USERNAME:?}
      SYNCCLIPBOARD_PASSWORD: ${SYNCCLIPBOARD_PASSWORD:?}
    volumes:
      - ./data:/app/data
```

Start the service from that directory:

```sh
docker compose up -d
```

On the clients, enter the host’s LAN address with port `5033` and the credentials you configured. After the first start, the configuration file is at `data/appsettings.json` on the host. When both credential environment variables are set, they take precedence over the file. For access over the internet, enable HTTPS on the server or at a reverse proxy.

## Run the .NET server directly

Download and unpack SyncClipboard.Server and install the ASP.NET Core 10.0 runtime. From the extracted directory, which must be writable, run:

```sh
dotnet SyncClipboard.Server.dll --contentRoot .
```

Set `AppSettings.UserName` and `AppSettings.Password` in `appsettings.json`. The listening address and port are under `Kestrel.Endpoints`. [Server downloads](https://github.com/Jeric-X/SyncClipboard/releases/latest)

## History retention

`MaxSavedHistoryCount` sets the maximum number of entries. `HistoryRetentionMinutes` sets the maximum age. Setting either to `0` removes only that limit. Use `ProtectTaggedRecords` and `ProtectTitledRecords` to keep tagged and titled records during automatic cleanup.
