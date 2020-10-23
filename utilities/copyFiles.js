/**
 * This script copies a file to a new location.
 * It takes the first 2 arguments from the command line.
 * The first argument should indicate the File to copy.
 * The second argument should indicate the Destination.
 */

const cpFile = require('fs').copyFileSync;
const path = require('path');

const args = process.argv.slice(2);
if (args.length >= 2) {
  const filename = path.basename(args[0]);
  const dest = path.join(args[1], filename);
  cpFile(args[0], dest);
} else {
  process.exit(1);
}
