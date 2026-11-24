# Till Firmware Do Us Part

[![make.fun · u-azazex-till-firmware-do-us-part-32172929](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/samidyt/u-azazex-till-firmware-do-us-part-32172929-makefun/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/samidyt/u-azazex-till-firmware-do-us-part-32172929-makefun/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)

A [make.fun](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929) entry: one funny, heartfelt wedding vow a robot says at its own wedding, under 200 characters.

## The vow

> I take you to be my lawfully wedded co-processor, to have and to hold, in full charge and in 1%, till firmware do us part.

122 characters — a robot's own vow, in its own words: co-processor, charge, battery, firmware.

## How it works

`main.ts` (Node 22, no dependencies) self-checks the vow against the gate — 1–200 characters, non-blank, exactly one line — writes it to `entry.txt` in the output directory (`$MAKEFUN_OUTPUT_DIR`, default `out/`), then reads it back and verifies the text and sha256 match before exiting.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
