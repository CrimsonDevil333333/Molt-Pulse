# Molt-Pulse 🦞💓

A modern, high-performance "vibe-check" CLI for professional Linux servers and Raspberry Pi 5. Designed to provide instant, human-readable system health summaries with a dash of personality.

## 🚀 Features

- **🎭 CPU Moods**: Real-time stress analysis translated into human vibes (Chill, Working, Sweating).
- **💓 Heart Rate**: Color-coded hardware temperature monitoring.
- **🗺️ Storage Map**: Detailed breakdown of all mounted filesystems with usage percentages and capacity.
- **🐳 Docker Awareness**: Automatically detects and reports the count of running containers.
- **📡 Network I/O**: Live traffic stats (Receive/Transmit speeds).
- **🚢 Intelligence Verdicts**: Instant system-wide health assessment (Verdicts).
- **🛠️ OS Identity**: Quick summary of your kernel, distribution, and uptime.

## 📦 Installation

```bash
npm install -g molt-pulse
```

## 🛠️ Usage

Simply run:
```bash
molt-pulse
```

## 📊 Output Structure

When executed, Molt-Pulse provides a structured summary like the following:

```text
🦞 MOLT-PULSE v1.1.0 - The Professional Server Vibe-Check

● OS: Debian GNU/Linux 13 (arm64)
● Uptime: 9.6 hours
CPU Mood: Chill 😴 (5.1%)
Heart Rate: 47.95°C
Memory Vibe: 35.0% Active (5.5GB / 15.8GB)
Network: RX: 0.0 KB/s | TX: 0.0 KB/s
Docker: 27 Containers Running 🐳

Storage Map:
  → /               38.9% Used [43.6G/117.0G]
  → /boot/firmware  12.8% Used [0.1G/0.5G]
  → /mnt/ssd        64.2% Used [1224.5G/1907.7G]

 VERDICT: GO TOUCH GRASS. EVERYTHING IS FINE.  🌱
```

---
*Maintained by Satyaa & Clawdy 🦞*
