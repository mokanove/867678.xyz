#!/bin/bash
urls=$(grep -oE 'https://cdn[^" ]*jsdelivr\.net/gh/[^" ]+' src/content.config.ts | sort -u)
if [ -z "$urls" ]; then
echo "No jsDelivr URLs found."
exit 0
fi
for url in $urls; do
purge="${url/cdn./purge.}"
echo "Refreshing $purge"
curl -fsS --max-time 3 "$purge" >/dev/null
done