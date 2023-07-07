// Copyright 2023 Descript, Inc

import * as github from "@actions/github";

const example = `[MEDIA-604] [MEDIA-368] add support for aiff, more pcm formats (#20458)\n\n- with latest libav.js (merged elsewhere), we now support:\r\n  - pcm_u8\r\n  - pcm_s8\r\n  - pcm_s16be\r\n  - pcm_s24be\r\n  - pcm_f32be\r\n  - aiff container\r\n- enable aiff files in FfprobePlugin (MEDIA-604)\r\n- added test files for those formats\r\n- also added a test file for pcm_s24be audio in a mp4 video file (MEDIA-368)\r\n- add aiff audio transcript snapshots, disable sony one (failing currently)`;

function getMessage() {
  console.log(github);
  const message = github.context.payload["head_commit"].message;
  const lines = message.split("\n");
  let firstLine = lines[0];

  firstLine = firstLine.replace(/\(#(\d+)\)/g, "");
  firstLine = firstLine.replace(/\[\S+-\d+\]/g, "");
  firstLine = firstLine.trim();

  console.log(firstLine);
}

getMessage();
