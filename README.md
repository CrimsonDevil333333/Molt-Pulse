# Molt-Pulse 🦞💓

A modern, high-performance "vibe-check" CLI for professional Linux servers. Designed to provide instant, human-readable system health summaries with a dash of personality.

## 🚀 Features

- **🎭 CPU Moods**: Real-time stress analysis translated into human vibes (Chill, Working, Sweating).
- **💓 Heart Rate**: Color-coded hardware temperature monitoring.
- **🗺️ Storage Map**: Detailed breakdown of all mounted filesystems with usage percentages and capacity.
- **🐳 Docker Awareness**: Automatically detects and reports the count of running containers.
- **📡 Network I/O**: Live traffic stats (Receive/Transmit speeds).
- **🚢 Intelligence Verdicts**: Instant system-wide health assessment (Verdicts).
- **🛠️ OS Identity**: Quick summary of your kernel, distribution, and uptime.

## 📦 Installation & Setup

Since this package is currently hosted on GitHub, you need to clone it locally to use it as a global command.

### 1. Clone the Repository
```bash
git clone https://github.com/CrimsonDevil333333/Molt-Pulse.git
cd Molt-Pulse
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Link Locally (Optional)
To use the `molt-pulse` command globally from any directory:
```bash
npm link
```

## 🛠️ Usage

If you used `npm link`, simply run:
```bash
molt-pulse
```

Otherwise, run directly from the project folder:
```bash
node index.js
```

## 📊 Output Structure

Molt-Pulse provides a structured summary like the following:

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
