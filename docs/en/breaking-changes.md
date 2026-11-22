# Breaking changes

## v3.3.4

The minimum macOS version for Intel Macs increased from 12.7 to 13.3. Apple silicon Macs still support macOS 12.7.

## v3.3.0

- The Linux client and server now require glibc 2.38 or later. Starting with v3.3.3, the AppImage bundles glibc and can run on older systems.
- The standalone server and clients distributed without a bundled runtime moved to .NET 10. Upgrade the system .NET runtime when using these builds.

## v3.1.3

The client removed the option to trust insecure HTTPS certificates. When using a private certificate authority, add its root certificate to the operating system’s trust store.

## v3.1.1

The sync protocol changed. When upgrading from an earlier version, upgrade all clients and standalone servers in the same sync network together. Third-party clients must also support the new protocol. Reimport the configuration for third-party mobile tools. [See issue #286](https://github.com/Jeric-X/SyncClipboard/issues/286)

The desktop client also changed its local history format. Before starting the new version, back up the `data` and `file` folders and move them out of the application data directory. Old history is not migrated automatically. [Application data directories by operating system](./desktop/#uninstall)
