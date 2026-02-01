#!/usr/bin/env node

const chalk = require('chalk');
const si = require('systeminformation');
const os = require('os');

async function getPulse() {
    console.log(chalk.bold.red('\n🦞 MOLT-PULSE v1.1.0') + chalk.dim(' - The Professional Server Vibe-Check\n'));

    try {
        const cpu = await si.currentLoad();
        const temp = await si.cpuTemperature();
        const mem = await si.mem();
        const disk = await si.fsSize();
        const osInfo = await si.osInfo();
        const net = await si.networkStats();
        const docker = await si.dockerContainers().catch(() => []);

        // 1. System Identity
        console.log(`${chalk.blue.bold('● OS:')} ${osInfo.distro} ${osInfo.release} (${osInfo.arch})`);
        console.log(`${chalk.blue.bold('● Uptime:')} ${(os.uptime() / 3600).toFixed(1)} hours`);

        // 2. CPU Mood
        let cpuMood = chalk.green('Chill 😴');
        if (cpu.currentLoad > 50) cpuMood = chalk.yellow('Working 🏋️');
        if (cpu.currentLoad > 80) cpuMood = chalk.red('Sweating 🥵');
        console.log(`${chalk.bold('CPU Mood:')} ${cpuMood} (${cpu.currentLoad.toFixed(1)}%)`);

        // 3. Temperature Check
        let tempVal = temp.main || 0;
        let tempColor = chalk.green;
        if (tempVal > 60) tempColor = chalk.yellow;
        if (tempVal > 75) tempColor = chalk.red;
        console.log(`${chalk.bold('Heart Rate:')} ${tempColor(tempVal + '°C')}`);

        // 4. Memory Vibe
        const memUsed = (mem.active / mem.total) * 100;
        console.log(`${chalk.bold('Memory Vibe:')} ${memUsed.toFixed(1)}% Active (${(mem.active / 1024 / 1024 / 1024).toFixed(1)}GB / ${(mem.total / 1024 / 1024 / 1024).toFixed(1)}GB)`);

        // 5. Network Traffic
        if (net && net[0]) {
            console.log(`${chalk.bold('Network:')} RX: ${(net[0].rx_sec / 1024).toFixed(1)} KB/s | TX: ${(net[0].tx_sec / 1024).toFixed(1)} KB/s`);
        }

        // 6. Containers
        if (docker.length > 0) {
            console.log(`${chalk.bold('Docker:')} ${docker.filter(c => c.state === 'running').length} Containers Running 🐳`);
        }

        // 7. Storage Status
        console.log(chalk.bold('\nStorage Map:'));
        disk.forEach(d => {
            if (d.size > 0) {
                let dColor = d.use > 80 ? chalk.red : chalk.cyan;
                console.log(`  ${chalk.dim('→')} ${d.mount.padEnd(15)} ${dColor(d.use.toFixed(1) + '%')} Used [${(d.used/1024/1024/1024).toFixed(1)}G/${(d.size/1024/1024/1024).toFixed(1)}G]`);
            }
        });

        // Conclusion
        console.log('');
        if (tempVal < 50 && cpu.currentLoad < 20) {
            console.log(chalk.bgGreen.black.bold(' VERDICT: GO TOUCH GRASS. EVERYTHING IS FINE. ') + ' 🌱\n');
        } else if (tempVal > 70 || cpu.currentLoad > 85) {
            console.log(chalk.bgRed.white.bold(' VERDICT: SERVER IS STRESSED. CHECK LOGS. ') + ' 🌬️\n');
        } else {
            console.log(chalk.bgBlue.white.bold(' VERDICT: STEADY AS SHE GOES. ') + ' 🚢\n');
        }

    } catch (e) {
        console.error(chalk.red('Failed to get pulse:'), e.message);
    }
}

getPulse();
