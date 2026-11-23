# Hash calculation

In SyncClipboard, each clipboard record is called a profile. SyncClipboard calculates a SHA-256 hash according to the profile type and uses it to determine whether two records have the same content. Text is encoded as UTF-8. Hashes are usually represented as uppercase hexadecimal strings. Compare the final hash values case-insensitively.

## TextProfile (plain text)

Encode the text as UTF-8 and calculate its SHA-256 hash.

## FileProfile and ImageProfile (one file or image)

1. Hash the file contents with SHA-256 and encode the digest as uppercase hexadecimal.
2. Take the file name without its directory path.
3. Join the file name and the uppercase digest with a pipe character (`|`).
4. Encode the resulting string as UTF-8 and hash it with SHA-256.

```text
ContentHash = Hex(SHA256(FileContent))
CombinedString = FileName + "|" + ToUpperCase(ContentHash)
Hash = SHA256(UTF8(CombinedString))
```

## GroupProfile (multiple files or directories)

Collect an entry for each input file or directory and all its descendants. For each input item, use its parent directory as the root for its entries' relative paths. Use `/` as the path separator and append a trailing `/` to directory names.

Sort all entries in ascending lexicographic order by the UTF-8 bytes of their relative paths. Then serialize each entry using the corresponding format below.

```text
D|{entryName}\0
F|{entryName}|{length}|{contentHash}\0
```

Here, `entryName` is the relative path, `length` is the file size in bytes, and `contentHash` is the SHA-256 digest of the file contents in uppercase hexadecimal. Each entry ends with a NUL character (`\0`), including the last entry. Concatenate the entries in sorted order, encode the result as UTF-8, and calculate its SHA-256 hash.

### Example

```text
folder/
  ├── a.txt (100 bytes, hash: abc...123)
  └── subdir/
      └── b.txt (200 bytes, hash: def...456)
```

The sorted entries are shown on separate lines for readability. Each line break below represents one NUL character in the actual hash input.

```text
D|folder/
F|folder/a.txt|100|ABC...123
D|folder/subdir/
F|folder/subdir/b.txt|200|DEF...456
```
