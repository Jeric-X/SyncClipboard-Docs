# Linux clipboard tools

If SyncClipboard reads garbled text or cannot read or write the clipboard in the background, an external clipboard tool can take the place of the default reader or writer.

## Install the tool

Run `echo "$XDG_SESSION_TYPE"` in a desktop terminal to check your session type. Install the matching package using the command below on Debian or Ubuntu. On other distributions, use your package manager to install the package of the same name.

| Session type | Install command | Supported operations |
| --- | --- | --- |
| `x11` | `sudo apt install xclip` | Read the clipboard |
| `wayland` | `sudo apt install wl-clipboard` | Read and write the clipboard |

## Enable the tool in SyncClipboard

Open **System settings → Clipboard access**. You can set the reader and writer independently.
