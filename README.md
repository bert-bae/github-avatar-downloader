# GitHub Avatar Downloader

## Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, `avatars/`.

## Expected Usage

This program should be executed from the command line, in the following manner:

`node download_avatars.js [repository owner] [repository name]`

If you do not include the repository owner or name, it will provide you with the appropriate instructions. If the provided repository owner and names are valid, the program will download all contributor's avatar images to the following file:

`./avatarimgs/[loginName].jpg`

This allows you to easily pull any contributor's images for recognition on your program or website page (because recognition is fun!).

Cheers,
Bert-Bae