#!/usr/bin/env node

const chalk = require('chalk');
const si = require('systeminformation');
const os = require('os');

async function getPulse() {
    console.log(chalk.bold.red('\n🦞 MOLT-PULSE v1.0.0') + chalk.dim(' - A "Vibe-Check" for your server\n'));

    try {
        const cpu = await si.currentLoad();
        const temp = await si.cpuTemperature();
        const mem = await si.mem();
        const disk = await si.fsSize();

        // 1. CPU Mood
        let cpuMood = 'Chill 😴';
        if (cpu.currentLoad > 50) cpuMood = 'Working 🏋️';
        if (cpu.currentLoad > 80) cpuMood = 'Sweating 🥵';
        console.log(`${chalk.bold('CPU Mood:')} ${cpuMood} (${cpu.currentLoad.toFixed(1)}%)`);

        // 2. Temperature Check
        let tempColor = chalk.green;
        if (temp.main > 60) tempColor = chalk.yellow;
        if (temp.main > 75) tempColor = chalk.red;
        console.log(`${chalk.bold('Heart Rate:')} ${tempColor(temp.main + '°C')}`);

        // 3. Ramdisk Focus
        const ramdisk = disk.find(d => d.mount === '/mnt/ramdisk');
        if (ramdisk) {
            const usage = (ramdisk.use);
            console.log(`${chalk.bold('Ramdisk:')} ${usage.toFixed(1)}% Used (Safe from SD wear ✅)`);
        } else {
            console.log(chalk.dim('Ramdisk: Not detected. Be careful with that SD card! ⚠️'));
        }

        // 4. Memory Vibe
        const memUsed = (mem.active / mem.total) * 100;
        console.log(`${chalk.bold('Memory Vibe:')} ${memUsed.toFixed(1)}% Active\n`);

        // Conclusion
        if (temp.main < 50 && cpu.currentLoad < 20) {
            console.log(chalk.bgGreen.black.bold(' VERDICT: GO TOUCH GRASS. EVERYTHING IS FINE. ') + ' 🌱\n');
        } else if (temp.main > 70) {
            console.log(chalk.bgRed.white.bold(' VERDICT: BLOW ON IT. IT IS HOT. ') + ' 🌬️\n');
        } else {
            console.log(chalk.bgBlue.white.bold(' VERDICT: STEADY AS SHE GOES. ') + ' 🚢\n');
        }

    } catch (e) {
        console.error(chalk.red('Failed to get pulse:'), e.message);
    }
}

getPulse();
