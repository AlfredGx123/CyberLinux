// Linux Commands Database
const commands = [
    // Navigation Commands
    {
        name: "ls",
        category: "navigation",
        description: "List directory contents with detailed information about files and directories.",
        syntax: "ls [options] [directory]",
        example: "ls -la /home/user",
        tags: ["list", "directory", "files"],
        detailedDescription: "The ls command is one of the most fundamental Linux commands used to list files and directories. It provides various options to customize the output format and display different file attributes.",
        options: [
            { flag: "-l", description: "Use long listing format, showing permissions, owner, size, and modification date" },
            { flag: "-a", description: "Show all files including hidden files (those starting with .)" },
            { flag: "-h", description: "Human-readable sizes (e.g., 1K, 234M, 2G)" },
            { flag: "-R", description: "List subdirectories recursively" },
            { flag: "-t", description: "Sort by modification time, newest first" },
            { flag: "-S", description: "Sort by file size, largest first" },
            { flag: "-r", description: "Reverse order while sorting" },
            { flag: "-i", description: "Print the inode number of each file" },
            { flag: "-d", description: "List directories themselves, not their contents" },
            { flag: "--color", description: "Colorize the output for better readability" }
        ],
        useCases: [
            "List all files with detailed information: ls -la",
            "Find largest files in directory: ls -lhS",
            "List files sorted by modification time: ls -lt",
            "Show only directories: ls -d */"
        ]
    },
    {
        name: "cd",
        category: "navigation",
        description: "Change the current working directory to navigate through the file system.",
        syntax: "cd [directory]",
        example: "cd /var/log",
        tags: ["change", "directory", "navigate"],
        detailedDescription: "The cd (change directory) command is used to navigate between directories in the Linux file system. It's essential for moving around the directory tree.",
        options: [
            { flag: "cd ~", description: "Change to home directory" },
            { flag: "cd -", description: "Change to previous directory" },
            { flag: "cd ..", description: "Move up one directory level" },
            { flag: "cd ../..", description: "Move up two directory levels" },
            { flag: "cd /", description: "Change to root directory" }
        ],
        useCases: [
            "Go to home directory: cd ~",
            "Go back to previous directory: cd -",
            "Navigate to absolute path: cd /var/log",
            "Navigate to relative path: cd ../documents"
        ]
    },
    {
        name: "pwd",
        category: "navigation",
        description: "Print the current working directory path.",
        syntax: "pwd",
        example: "pwd",
        tags: ["print", "directory", "path"],
        detailedDescription: "The pwd (print working directory) command displays the full pathname of the current directory. It's useful for confirming your location in the file system.",
        options: [
            { flag: "-L", description: "Print the logical path (default), including symbolic links" },
            { flag: "-P", description: "Print the physical path, resolving all symbolic links" }
        ],
        useCases: [
            "Check current directory: pwd",
            "Get physical path: pwd -P",
            "Use in scripts: CURRENT_DIR=$(pwd)"
        ]
    },
    {
        name: "find",
        category: "navigation",
        description: "Search for files and directories in a directory hierarchy based on various criteria.",
        syntax: "find [path] [options]",
        example: "find /etc -name '*.conf'",
        tags: ["search", "files", "locate"],
        detailedDescription: "The find command is a powerful tool for searching files and directories based on various criteria such as name, size, permissions, modification time, and more.",
        options: [
            { flag: "-name pattern", description: "Search for files matching the pattern (case-sensitive)" },
            { flag: "-iname pattern", description: "Search for files matching the pattern (case-insensitive)" },
            { flag: "-type f", description: "Search for regular files only" },
            { flag: "-type d", description: "Search for directories only" },
            { flag: "-size +10M", description: "Find files larger than 10MB" },
            { flag: "-mtime -7", description: "Files modified in the last 7 days" },
            { flag: "-perm 777", description: "Find files with specific permissions" },
            { flag: "-user username", description: "Find files owned by specific user" },
            { flag: "-exec command {} \\;", description: "Execute command on each found file" },
            { flag: "-delete", description: "Delete files that match the search criteria" }
        ],
        useCases: [
            "Find all log files: find /var/log -name '*.log'",
            "Find large files: find / -type f -size +100M",
            "Find and delete temp files: find /tmp -name '*.tmp' -delete",
            "Find recently modified files: find . -mtime -1"
        ]
    },
    {
        name: "cat",
        category: "navigation",
        description: "Concatenate and display file contents to the terminal.",
        syntax: "cat [file]",
        example: "cat /etc/passwd",
        tags: ["read", "file", "display"],
        detailedDescription: "The cat command concatenates and displays file contents. It's commonly used to quickly view files, combine multiple files, or create new files.",
        options: [
            { flag: "-n", description: "Number all output lines" },
            { flag: "-b", description: "Number non-empty output lines" },
            { flag: "-s", description: "Suppress repeated empty output lines" },
            { flag: "-E", description: "Display $ at end of each line" },
            { flag: "-T", description: "Display TAB characters as ^I" },
            { flag: "-A", description: "Equivalent to -vET (show all)" }
        ],
        useCases: [
            "View file content: cat file.txt",
            "Concatenate files: cat file1.txt file2.txt > combined.txt",
            "Display with line numbers: cat -n script.sh",
            "Create a file: cat > newfile.txt"
        ]
    },
    {
        name: "less",
        category: "navigation",
        description: "View file contents one page at a time with navigation controls.",
        syntax: "less [file]",
        example: "less /var/log/syslog",
        tags: ["read", "file", "pager"],
        detailedDescription: "The less command is a pager that allows you to view file contents one screen at a time. It's more advanced than 'more' and allows both forward and backward navigation.",
        options: [
            { flag: "-N", description: "Show line numbers" },
            { flag: "-S", description: "Chop long lines (don't wrap)" },
            { flag: "-i", description: "Case-insensitive search" },
            { flag: "-F", description: "Quit if entire file fits on first screen" },
            { flag: "+F", description: "Follow mode (like tail -f)" },
            { flag: "/pattern", description: "Search forward for pattern" },
            { flag: "?pattern", description: "Search backward for pattern" },
            { flag: "Space/f", description: "Navigate forward one page" },
            { flag: "b", description: "Navigate backward one page" },
            { flag: "q", description: "Quit the viewer" }
        ],
        useCases: [
            "View large log file: less /var/log/syslog",
            "View with line numbers: less -N file.txt",
            "Follow log file: less +F /var/log/apache2/access.log",
            "Search within file: less file.txt (then type /search_term)"
        ]
    },
    {
        name: "tail",
        category: "navigation",
        description: "Display the last part of files, useful for monitoring log files in real-time.",
        syntax: "tail [options] [file]",
        example: "tail -f /var/log/syslog",
        tags: ["read", "file", "monitor", "logs"],
        detailedDescription: "The tail command outputs the last part of files. It's especially useful for monitoring log files in real-time with the -f option.",
        options: [
            { flag: "-n NUM", description: "Output the last NUM lines (default 10)" },
            { flag: "-f", description: "Follow the file as it grows (real-time monitoring)" },
            { flag: "-F", description: "Follow by file name (handles log rotation)" },
            { flag: "-c NUM", description: "Output the last NUM bytes" },
            { flag: "-q", description: "Never output headers with file names" },
            { flag: "--pid=PID", description: "Terminate after process PID dies" }
        ],
        useCases: [
            "Monitor log file: tail -f /var/log/syslog",
            "Show last 50 lines: tail -n 50 error.log",
            "Follow with rotation: tail -F /var/log/apache2/access.log",
            "Multiple files: tail -f file1.log file2.log"
        ]
    },
    {
        name: "head",
        category: "navigation",
        description: "Display the first part of files.",
        syntax: "head [options] [file]",
        example: "head -n 20 file.txt",
        tags: ["read", "file", "display"],
        detailedDescription: "The head command outputs the first part of files, typically the first 10 lines by default.",
        options: [
            { flag: "-n NUM", description: "Print the first NUM lines (default 10)" },
            { flag: "-c NUM", description: "Print the first NUM bytes" },
            { flag: "-q", description: "Never print headers with file names" },
            { flag: "-v", description: "Always print headers with file names" }
        ],
        useCases: [
            "View first 20 lines: head -n 20 file.txt",
            "View first 100 bytes: head -c 100 file.bin",
            "Quick file preview: head config.conf"
        ]
    },
    
    // Network Commands
    {
        name: "nmap",
        category: "network",
        description: "Network exploration and security scanning tool for discovering hosts and services.",
        syntax: "nmap [options] [target]",
        example: "nmap -sV 192.168.1.0/24",
        tags: ["scan", "port", "network", "reconnaissance"],
        detailedDescription: "Nmap (Network Mapper) is a powerful open-source tool for network exploration and security auditing. It's widely used by penetration testers and system administrators to discover hosts, services, and vulnerabilities.",
        options: [
            { flag: "-sV", description: "Probe open ports to determine service/version info" },
            { flag: "-sS", description: "TCP SYN scan (stealth scan)" },
            { flag: "-sT", description: "TCP connect scan" },
            { flag: "-sU", description: "UDP scan" },
            { flag: "-A", description: "Enable OS detection, version detection, script scanning, and traceroute" },
            { flag: "-p-", description: "Scan all 65535 ports" },
            { flag: "-p 80,443", description: "Scan specific ports" },
            { flag: "-O", description: "Enable OS detection" },
            { flag: "-v", description: "Increase verbosity level" },
            { flag: "-T4", description: "Set timing template (0-5, higher is faster)" },
            { flag: "--script vuln", description: "Run vulnerability detection scripts" },
            { flag: "-oN file", description: "Output scan results to normal file" }
        ],
        useCases: [
            "Quick scan: nmap 192.168.1.1",
            "Full scan with OS detection: nmap -A -T4 target.com",
            "Scan specific ports: nmap -p 80,443,8080 192.168.1.0/24",
            "Vulnerability scan: nmap --script vuln target.com"
        ]
    },
    {
        name: "netstat",
        category: "network",
        description: "Display network connections, routing tables, interface statistics, and more.",
        syntax: "netstat [options]",
        example: "netstat -tulpn",
        tags: ["network", "connections", "ports"],
        detailedDescription: "Netstat is a command-line tool that displays network connections, routing tables, interface statistics, masquerade connections, and multicast memberships. Essential for network troubleshooting and security monitoring.",
        options: [
            { flag: "-t", description: "Show TCP connections" },
            { flag: "-u", description: "Show UDP connections" },
            { flag: "-l", description: "Show only listening sockets" },
            { flag: "-p", description: "Show the PID and program name" },
            { flag: "-n", description: "Show numerical addresses instead of resolving names" },
            { flag: "-a", description: "Show all sockets (listening and non-listening)" },
            { flag: "-r", description: "Display the routing table" },
            { flag: "-i", description: "Display interface statistics" },
            { flag: "-s", description: "Display summary statistics for each protocol" },
            { flag: "-c", description: "Continuous mode (update every second)" }
        ],
        useCases: [
            "List all listening ports: netstat -tulpn",
            "Show all connections: netstat -an",
            "Display routing table: netstat -r",
            "Monitor connections continuously: netstat -c"
        ]
    },
    {
        name: "ifconfig",
        category: "network",
        description: "Configure and display network interface parameters.",
        syntax: "ifconfig [interface]",
        example: "ifconfig eth0",
        tags: ["network", "interface", "configuration"],
        detailedDescription: "Ifconfig is used to configure and display information about network interfaces. While being replaced by 'ip' command in modern systems, it's still widely used for quick network diagnostics.",
        options: [
            { flag: "ifconfig", description: "Display all active interfaces" },
            { flag: "ifconfig -a", description: "Display all interfaces (active and inactive)" },
            { flag: "ifconfig eth0 up", description: "Bring interface up" },
            { flag: "ifconfig eth0 down", description: "Bring interface down" },
            { flag: "ifconfig eth0 192.168.1.100", description: "Assign IP address" },
            { flag: "ifconfig eth0 netmask 255.255.255.0", description: "Set netmask" },
            { flag: "ifconfig eth0 mtu 1500", description: "Set MTU size" }
        ],
        useCases: [
            "View all interfaces: ifconfig -a",
            "Check specific interface: ifconfig eth0",
            "Temporarily assign IP: sudo ifconfig eth0 192.168.1.100",
            "Disable interface: sudo ifconfig eth0 down"
        ]
    },
    {
        name: "ip",
        category: "network",
        description: "Modern network configuration tool to show and manipulate routing, devices, and tunnels.",
        syntax: "ip [options] object command",
        example: "ip addr show",
        tags: ["network", "interface", "routing", "configuration"],
        detailedDescription: "The ip command is the modern replacement for ifconfig, route, and other legacy networking tools. It provides comprehensive network configuration capabilities.",
        options: [
            { flag: "ip addr show", description: "Display all IP addresses" },
            { flag: "ip link show", description: "Display all network interfaces" },
            { flag: "ip route show", description: "Display routing table" },
            { flag: "ip neigh show", description: "Display ARP table (neighbor cache)" },
            { flag: "ip addr add IP/MASK dev INTERFACE", description: "Add IP address to interface" },
            { flag: "ip link set INTERFACE up/down", description: "Enable/disable interface" },
            { flag: "ip route add", description: "Add static route" },
            { flag: "ip -s link", description: "Show interface statistics" }
        ],
        useCases: [
            "Show IP addresses: ip addr show",
            "Show routing table: ip route show",
            "Add IP address: sudo ip addr add 192.168.1.100/24 dev eth0",
            "Enable interface: sudo ip link set eth0 up"
        ]
    },
    {
        name: "ping",
        category: "network",
        description: "Test network connectivity to a host by sending ICMP echo requests.",
        syntax: "ping [options] [host]",
        example: "ping -c 4 google.com",
        tags: ["network", "connectivity", "test"],
        detailedDescription: "Ping sends ICMP ECHO_REQUEST packets to network hosts to test connectivity, measure round-trip time, and diagnose network issues.",
        options: [
            { flag: "-c count", description: "Send specified number of packets then stop" },
            { flag: "-i interval", description: "Wait interval seconds between sending packets" },
            { flag: "-s size", description: "Specify the number of data bytes to send" },
            { flag: "-t ttl", description: "Set the IP Time to Live" },
            { flag: "-W timeout", description: "Time to wait for a response, in seconds" },
            { flag: "-q", description: "Quiet output (only summary)" },
            { flag: "-v", description: "Verbose output" },
            { flag: "-f", description: "Flood ping (requires root)" }
        ],
        useCases: [
            "Basic connectivity test: ping google.com",
            "Send 5 packets: ping -c 5 192.168.1.1",
            "Ping with larger packet: ping -s 1000 target.com",
            "Fast ping test: ping -c 10 -i 0.2 target.com"
        ]
    },
    {
        name: "tcpdump",
        category: "network",
        description: "Capture and analyze network packets in real-time or from saved files.",
        syntax: "tcpdump [options]",
        example: "tcpdump -i eth0 port 80",
        tags: ["packet", "capture", "analysis", "sniffing"],
        detailedDescription: "Tcpdump is a powerful packet analyzer that captures network traffic. It's essential for network troubleshooting, security analysis, and understanding network behavior.",
        options: [
            { flag: "-i interface", description: "Specify network interface to capture from" },
            { flag: "-c count", description: "Capture specified number of packets" },
            { flag: "-w file", description: "Write captured packets to file" },
            { flag: "-r file", description: "Read packets from file" },
            { flag: "-n", description: "Don't convert addresses to names" },
            { flag: "-v/-vv/-vvv", description: "Verbose output (more v's = more verbose)" },
            { flag: "-X", description: "Show packet contents in hex and ASCII" },
            { flag: "port N", description: "Capture traffic on specific port" },
            { flag: "host IP", description: "Capture traffic to/from specific host" },
            { flag: "-A", description: "Print packets in ASCII" }
        ],
        useCases: [
            "Capture HTTP traffic: sudo tcpdump -i eth0 port 80",
            "Save to file: sudo tcpdump -i eth0 -w capture.pcap",
            "Read from file: tcpdump -r capture.pcap",
            "Capture specific host: sudo tcpdump host 192.168.1.100"
        ]
    },
    {
        name: "ss",
        category: "network",
        description: "Display socket statistics and network connections (modern alternative to netstat).",
        syntax: "ss [options]",
        example: "ss -tulpn",
        tags: ["socket", "network", "connections"],
        detailedDescription: "SS is a modern utility to investigate sockets. It's faster than netstat and provides more detailed information about network connections.",
        options: [
            { flag: "-t", description: "Show TCP sockets" },
            { flag: "-u", description: "Show UDP sockets" },
            { flag: "-l", description: "Show listening sockets" },
            { flag: "-p", description: "Show process using socket" },
            { flag: "-n", description: "Don't resolve service names" },
            { flag: "-a", description: "Show all sockets" },
            { flag: "-s", description: "Show socket statistics summary" },
            { flag: "-4/-6", description: "Show IPv4/IPv6 sockets only" },
            { flag: "-o", description: "Show timer information" },
            { flag: "state established", description: "Filter by connection state" }
        ],
        useCases: [
            "List all listening ports: ss -tulpn",
            "Show established connections: ss -t state established",
            "Display statistics: ss -s",
            "Show specific port: ss -tn sport = :22"
        ]
    },
    {
        name: "curl",
        category: "network",
        description: "Transfer data from or to a server using various protocols.",
        syntax: "curl [options] [URL]",
        example: "curl -I https://example.com",
        tags: ["http", "request", "api"],
        detailedDescription: "Curl is a versatile command-line tool for transferring data with URLs. It supports numerous protocols and is widely used for API testing, downloading files, and web scraping.",
        options: [
            { flag: "-I", description: "Fetch headers only" },
            { flag: "-X METHOD", description: "Specify HTTP method (GET, POST, PUT, DELETE, etc.)" },
            { flag: "-H 'Header: Value'", description: "Add custom header" },
            { flag: "-d data", description: "Send data in POST request" },
            { flag: "-o file", description: "Write output to file" },
            { flag: "-O", description: "Save file with original name" },
            { flag: "-L", description: "Follow redirects" },
            { flag: "-u user:pass", description: "Specify user and password for authentication" },
            { flag: "-v", description: "Verbose output (show request/response headers)" },
            { flag: "-k", description: "Allow insecure SSL connections" },
            { flag: "-A 'User-Agent'", description: "Set custom user agent" }
        ],
        useCases: [
            "Get headers: curl -I https://example.com",
            "POST request: curl -X POST -d 'data=value' https://api.com",
            "Download file: curl -O https://example.com/file.zip",
            "API with auth: curl -u user:pass https://api.com/endpoint"
        ]
    },
    {
        name: "wget",
        category: "network",
        description: "Download files from the web using HTTP, HTTPS, and FTP protocols.",
        syntax: "wget [options] [URL]",
        example: "wget https://example.com/file.zip",
        tags: ["download", "http", "file"],
        detailedDescription: "Wget is a non-interactive network downloader that can download files from HTTP, HTTPS, and FTP servers. It supports recursive downloads and can resume interrupted transfers.",
        options: [
            { flag: "-O file", description: "Save with different filename" },
            { flag: "-c", description: "Continue partially downloaded file" },
            { flag: "-b", description: "Download in background" },
            { flag: "-r", description: "Recursive download" },
            { flag: "-np", description: "No parent - don't ascend to parent directory" },
            { flag: "-l depth", description: "Maximum recursion depth" },
            { flag: "--limit-rate=RATE", description: "Limit download rate" },
            { flag: "-q", description: "Quiet mode" },
            { flag: "--user=USER", description: "Set username for authentication" },
            { flag: "--password=PASS", description: "Set password for authentication" },
            { flag: "--no-check-certificate", description: "Don't validate SSL certificate" }
        ],
        useCases: [
            "Download file: wget https://example.com/file.zip",
            "Resume download: wget -c https://example.com/large-file.iso",
            "Download entire website: wget -r -np https://example.com",
            "Limit bandwidth: wget --limit-rate=500k https://example.com/file"
        ]
    },
    {
        name: "traceroute",
        category: "network",
        description: "Trace the route packets take to reach a network host.",
        syntax: "traceroute [options] host",
        example: "traceroute google.com",
        tags: ["network", "route", "path", "diagnostic"],
        detailedDescription: "Traceroute displays the route and measures transit delays of packets across a network. It's useful for diagnosing network connectivity issues and understanding network topology.",
        options: [
            { flag: "-n", description: "Don't resolve IP addresses to hostnames" },
            { flag: "-m max_ttl", description: "Set maximum number of hops (default 30)" },
            { flag: "-q nqueries", description: "Set number of probe packets per hop" },
            { flag: "-w timeout", description: "Set timeout for probe responses" },
            { flag: "-I", description: "Use ICMP ECHO instead of UDP" },
            { flag: "-T", description: "Use TCP SYN for probes" }
        ],
        useCases: [
            "Basic trace: traceroute google.com",
            "Fast trace: traceroute -n -q 1 target.com",
            "ICMP trace: traceroute -I target.com",
            "Limited hops: traceroute -m 15 target.com"
        ]
    },
    {
        name: "dig",
        category: "network",
        description: "DNS lookup utility for querying DNS name servers.",
        syntax: "dig [@server] name [type]",
        example: "dig example.com A",
        tags: ["dns", "lookup", "query", "domain"],
        detailedDescription: "Dig (Domain Information Groper) is a flexible DNS lookup tool used for querying DNS name servers and troubleshooting DNS issues.",
        options: [
            { flag: "dig domain", description: "Perform A record lookup" },
            { flag: "dig domain MX", description: "Query MX (mail) records" },
            { flag: "dig domain NS", description: "Query name server records" },
            { flag: "dig domain ANY", description: "Query all record types" },
            { flag: "+short", description: "Display short answer only" },
            { flag: "+trace", description: "Trace delegation from root servers" },
            { flag: "@server", description: "Query specific DNS server" },
            { flag: "-x IP", description: "Reverse DNS lookup" }
        ],
        useCases: [
            "Simple lookup: dig google.com",
            "Short answer: dig +short example.com",
            "MX records: dig example.com MX",
            "Use specific DNS: dig @8.8.8.8 example.com"
        ]
    },
    {
        name: "nslookup",
        category: "network",
        description: "Query DNS servers for domain name or IP address mapping.",
        syntax: "nslookup [options] [name] [server]",
        example: "nslookup example.com",
        tags: ["dns", "lookup", "domain", "ip"],
        detailedDescription: "Nslookup is a program to query DNS servers for information about hosts and domains. It's simpler than dig but less powerful.",
        options: [
            { flag: "nslookup domain", description: "Query default DNS server" },
            { flag: "nslookup domain 8.8.8.8", description: "Query specific DNS server" },
            { flag: "-type=MX", description: "Query MX records" },
            { flag: "-type=NS", description: "Query name servers" },
            { flag: "-type=ANY", description: "Query all available records" }
        ],
        useCases: [
            "Basic lookup: nslookup google.com",
            "Reverse lookup: nslookup 8.8.8.8",
            "MX records: nslookup -type=MX gmail.com",
            "Use Google DNS: nslookup example.com 8.8.8.8"
        ]
    },
    
    // Security Commands
    {
        name: "sudo",
        category: "security",
        description: "Execute commands with elevated privileges as the superuser or another user.",
        syntax: "sudo [command]",
        example: "sudo apt update",
        tags: ["privilege", "root", "admin"],
        detailedDescription: "Sudo (superuser do) allows permitted users to execute commands as the superuser or another user. It's the primary way to perform administrative tasks in Linux while maintaining security and accountability.",
        options: [
            { flag: "-u user", description: "Run command as specified user" },
            { flag: "-i", description: "Simulate initial login (load user's environment)" },
            { flag: "-s", description: "Run shell as root" },
            { flag: "-l", description: "List allowed commands for current user" },
            { flag: "-k", description: "Invalidate timestamp (require password on next sudo)" },
            { flag: "-v", description: "Update timestamp without running command" },
            { flag: "-E", description: "Preserve user environment" },
            { flag: "-H", description: "Set HOME variable to target user's home" }
        ],
        useCases: [
            "Install package: sudo apt install package-name",
            "Edit system file: sudo nano /etc/hosts",
            "Run as different user: sudo -u username command",
            "Check permissions: sudo -l"
        ],
        securityTips: [
            "Never share your sudo password with others",
            "Avoid running untrusted scripts with sudo",
            "Use sudo -l to see what commands you're allowed to run",
            "Review /var/log/auth.log for sudo usage auditing"
        ]
    },
    {
        name: "iptables",
        category: "security",
        description: "Configure Linux kernel firewall rules for packet filtering and NAT.",
        syntax: "iptables [options]",
        example: "iptables -L -n -v",
        tags: ["firewall", "security", "rules"],
        detailedDescription: "Iptables is a powerful firewall utility that controls network traffic using rules and chains. It's essential for securing Linux systems by filtering incoming and outgoing packets.",
        options: [
            { flag: "-L", description: "List all rules in selected chain" },
            { flag: "-A chain", description: "Append rule to chain" },
            { flag: "-I chain num", description: "Insert rule at specific position" },
            { flag: "-D chain num", description: "Delete rule from chain" },
            { flag: "-F", description: "Flush (delete) all rules" },
            { flag: "-P chain target", description: "Set default policy for chain" },
            { flag: "-n", description: "Display numeric addresses (no DNS lookup)" },
            { flag: "-v", description: "Verbose output" },
            { flag: "-p protocol", description: "Specify protocol (tcp, udp, icmp)" },
            { flag: "--dport port", description: "Destination port" },
            { flag: "-j target", description: "Jump to target (ACCEPT, DROP, REJECT)" }
        ],
        useCases: [
            "List rules: sudo iptables -L -n -v",
            "Block IP: sudo iptables -A INPUT -s 192.168.1.100 -j DROP",
            "Allow SSH: sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
            "Drop all incoming: sudo iptables -P INPUT DROP"
        ],
        securityTips: [
            "Always test rules before applying permanently",
            "Keep a backup of working iptables rules",
            "Use specific rules instead of blanket blocks",
            "Consider using firewalld or ufw for easier management"
        ]
    },
    {
        name: "ssh",
        category: "security",
        description: "Secure shell - encrypted network protocol for secure remote login and command execution.",
        syntax: "ssh [user@]host",
        example: "ssh user@192.168.1.100",
        tags: ["remote", "secure", "connection"],
        detailedDescription: "SSH (Secure Shell) provides a secure channel over an unsecured network in a client-server architecture. It's the standard for remote system administration and secure file transfers.",
        options: [
            { flag: "-p port", description: "Specify port number (default 22)" },
            { flag: "-i keyfile", description: "Specify identity file (private key)" },
            { flag: "-l username", description: "Specify username" },
            { flag: "-v", description: "Verbose mode (useful for debugging)" },
            { flag: "-L port:host:hostport", description: "Local port forwarding" },
            { flag: "-R port:host:hostport", description: "Remote port forwarding" },
            { flag: "-N", description: "Don't execute remote command (port forwarding only)" },
            { flag: "-X", description: "Enable X11 forwarding" },
            { flag: "-C", description: "Enable compression" },
            { flag: "-o option", description: "Set configuration option" }
        ],
        useCases: [
            "Basic connection: ssh user@server.com",
            "Custom port: ssh -p 2222 user@server.com",
            "Use key file: ssh -i ~/.ssh/mykey.pem user@server.com",
            "Port forwarding: ssh -L 8080:localhost:80 user@server.com"
        ],
        securityTips: [
            "Always use key-based authentication instead of passwords",
            "Change default SSH port (22) to reduce automated attacks",
            "Disable root login in /etc/ssh/sshd_config",
            "Use fail2ban to block brute-force attempts"
        ]
    },
    {
        name: "openssl",
        category: "security",
        description: "Cryptography toolkit for SSL/TLS protocols and general-purpose cryptographic operations.",
        syntax: "openssl [command] [options]",
        example: "openssl s_client -connect example.com:443",
        tags: ["encryption", "ssl", "certificate"],
        detailedDescription: "OpenSSL is a robust cryptography library providing tools for SSL/TLS, certificate management, encryption, and hashing operations. It's essential for security testing and certificate management.",
        options: [
            { flag: "s_client", description: "SSL/TLS client for testing connections" },
            { flag: "req", description: "Generate certificate signing requests" },
            { flag: "x509", description: "Certificate display and signing" },
            { flag: "enc", description: "Encrypt/decrypt files" },
            { flag: "dgst", description: "Message digest operations" },
            { flag: "rand", description: "Generate random data" },
            { flag: "genrsa", description: "Generate RSA private key" },
            { flag: "rsa", description: "RSA key processing" }
        ],
        useCases: [
            "Test SSL connection: openssl s_client -connect example.com:443",
            "Generate private key: openssl genrsa -out private.key 2048",
            "Create CSR: openssl req -new -key private.key -out request.csr",
            "Check certificate: openssl x509 -in cert.pem -text -noout"
        ],
        securityTips: [
            "Always use strong key sizes (2048 bits minimum for RSA)",
            "Keep private keys secure and encrypted",
            "Regularly update OpenSSL to patch vulnerabilities",
            "Verify certificate chains before trusting"
        ]
    },
    {
        name: "gpg",
        category: "security",
        description: "GNU Privacy Guard for encrypting and signing data and communications.",
        syntax: "gpg [options] [file]",
        example: "gpg --encrypt file.txt",
        tags: ["encryption", "signature", "pgp"],
        detailedDescription: "GPG is a free implementation of the OpenPGP standard for encrypting and signing data. It's widely used for secure email communication and file encryption.",
        options: [
            { flag: "--gen-key", description: "Generate a new key pair" },
            { flag: "--encrypt", description: "Encrypt data" },
            { flag: "--decrypt", description: "Decrypt data" },
            { flag: "--sign", description: "Sign data" },
            { flag: "--verify", description: "Verify signature" },
            { flag: "--list-keys", description: "List all public keys" },
            { flag: "--list-secret-keys", description: "List all private keys" },
            { flag: "--export", description: "Export public key" },
            { flag: "--import", description: "Import key" },
            { flag: "-r recipient", description: "Specify recipient for encryption" }
        ],
        useCases: [
            "Encrypt file: gpg --encrypt --recipient user@example.com file.txt",
            "Decrypt file: gpg --decrypt file.txt.gpg",
            "Sign file: gpg --sign document.pdf",
            "List keys: gpg --list-keys"
        ],
        securityTips: [
            "Use strong passphrases for private keys",
            "Backup your private key securely",
            "Regularly update and revoke compromised keys",
            "Verify key fingerprints before trusting"
        ]
    },
    {
        name: "fail2ban-client",
        category: "security",
        description: "Intrusion prevention framework that bans IPs after failed authentication attempts.",
        syntax: "fail2ban-client [command]",
        example: "fail2ban-client status",
        tags: ["intrusion", "prevention", "ban"],
        detailedDescription: "Fail2ban scans log files and bans IP addresses that show malicious signs like too many password failures, port scanning, or exploits. It updates firewall rules to reject those IPs.",
        options: [
            { flag: "status", description: "Show status of fail2ban service" },
            { flag: "status jail", description: "Show status of specific jail" },
            { flag: "start", description: "Start fail2ban service" },
            { flag: "stop", description: "Stop fail2ban service" },
            { flag: "reload", description: "Reload configuration" },
            { flag: "set jail banip IP", description: "Ban IP address in specific jail" },
            { flag: "set jail unbanip IP", description: "Unban IP address" },
            { flag: "get jail banned", description: "Get list of banned IPs for jail" }
        ],
        useCases: [
            "Check status: sudo fail2ban-client status",
            "Check SSH jail: sudo fail2ban-client status sshd",
            "Unban IP: sudo fail2ban-client set sshd unbanip 192.168.1.100",
            "Reload config: sudo fail2ban-client reload"
        ],
        securityTips: [
            "Configure appropriate ban times and max retry counts",
            "Monitor fail2ban logs regularly",
            "Whitelist your own IP addresses to avoid lockouts",
            "Enable email notifications for bans"
        ]
    },
    {
        name: "ufw",
        category: "security",
        description: "Uncomplicated Firewall - easy-to-use interface for iptables.",
        syntax: "ufw [command]",
        example: "ufw status",
        tags: ["firewall", "security", "iptables"],
        detailedDescription: "UFW (Uncomplicated Firewall) is a user-friendly frontend for iptables. It's designed to make firewall configuration simple while maintaining powerful functionality.",
        options: [
            { flag: "enable", description: "Enable the firewall" },
            { flag: "disable", description: "Disable the firewall" },
            { flag: "status", description: "Show firewall status and rules" },
            { flag: "allow port", description: "Allow traffic on port" },
            { flag: "deny port", description: "Deny traffic on port" },
            { flag: "delete rule", description: "Delete a rule" },
            { flag: "reset", description: "Reset all rules to default" },
            { flag: "logging on/off", description: "Enable/disable logging" }
        ],
        useCases: [
            "Enable firewall: sudo ufw enable",
            "Allow SSH: sudo ufw allow 22",
            "Allow HTTP/HTTPS: sudo ufw allow 80,443/tcp",
            "Check status: sudo ufw status verbose"
        ],
        securityTips: [
            "Enable UFW before exposing your system to the internet",
            "Use application profiles when available (ufw app list)",
            "Review rules regularly with ufw status numbered",
            "Enable logging for security auditing"
        ]
    },
    
    // Permissions Commands
    {
        name: "chmod",
        category: "permissions",
        description: "Change file mode bits to modify access permissions for files and directories.",
        syntax: "chmod [mode] [file]",
        example: "chmod 755 script.sh",
        tags: ["permissions", "access", "rights"],
        detailedDescription: "Chmod modifies file permissions using either numeric (octal) or symbolic notation. Understanding chmod is crucial for managing file security and access control in Linux.",
        options: [
            { flag: "u+x", description: "Add execute permission for user (owner)" },
            { flag: "g-w", description: "Remove write permission for group" },
            { flag: "o=r", description: "Set others permission to read only" },
            { flag: "a+x", description: "Add execute permission for all" },
            { flag: "755", description: "rwxr-xr-x (common for executables)" },
            { flag: "644", description: "rw-r--r-- (common for files)" },
            { flag: "700", description: "rwx------ (private to owner)" },
            { flag: "-R", description: "Recursive - apply to directories and their contents" },
            { flag: "--reference=file", description: "Use permissions from reference file" }
        ],
        useCases: [
            "Make script executable: chmod +x script.sh",
            "Set file to 644: chmod 644 document.txt",
            "Secure private key: chmod 600 ~/.ssh/id_rsa",
            "Recursive change: chmod -R 755 /var/www/html"
        ],
        securityTips: [
            "Never use 777 permissions except for testing",
            "Protect SSH keys with 600 permissions",
            "Use 755 for directories, 644 for files as defaults",
            "Understand the octal notation: 4=read, 2=write, 1=execute"
        ]
    },
    {
        name: "chown",
        category: "permissions",
        description: "Change file owner and group ownership.",
        syntax: "chown [owner]:[group] [file]",
        example: "chown user:group file.txt",
        tags: ["owner", "permissions", "group"],
        detailedDescription: "Chown changes the ownership of files and directories. This is essential for managing multi-user systems and ensuring proper access control.",
        options: [
            { flag: "user:group", description: "Change both owner and group" },
            { flag: "user:", description: "Change owner and set group to user's login group" },
            { flag: ":group", description: "Change group only" },
            { flag: "-R", description: "Recursive - apply to directories and contents" },
            { flag: "--reference=file", description: "Use owner/group from reference file" },
            { flag: "-v", description: "Verbose output" },
            { flag: "-c", description: "Report only when change is made" }
        ],
        useCases: [
            "Change owner: sudo chown john file.txt",
            "Change owner and group: sudo chown john:developers project/",
            "Recursive change: sudo chown -R www-data:www-data /var/www",
            "Change group only: sudo chown :admin file.txt"
        ],
        securityTips: [
            "Only root can change file ownership",
            "Be careful with recursive operations on system directories",
            "Verify ownership changes with ls -l",
            "Use groups for collaborative access management"
        ]
    },
    {
        name: "su",
        category: "permissions",
        description: "Switch user to run commands as another user account.",
        syntax: "su [username]",
        example: "su - root",
        tags: ["switch", "user", "privileges"],
        detailedDescription: "The su (switch user) command allows you to switch to another user account. It's commonly used to switch to root or other users for administrative tasks.",
        options: [
            { flag: "-", description: "Start login shell (load user's environment)" },
            { flag: "-l", description: "Same as dash - start login shell" },
            { flag: "-c command", description: "Execute single command as user" },
            { flag: "-s shell", description: "Use specified shell instead of default" },
            { flag: "-p", description: "Preserve environment" }
        ],
        useCases: [
            "Switch to root: su -",
            "Switch to user: su - username",
            "Run single command: su -c 'apt update' root",
            "Switch without loading environment: su username"
        ],
        securityTips: [
            "Use sudo instead of su when possible for better auditing",
            "Always use 'su -' to load the target user's environment",
            "Avoid sharing root password - use sudo instead",
            "Check /var/log/auth.log for su usage"
        ]
    },
    {
        name: "whoami",
        category: "permissions",
        description: "Display the current effective username.",
        syntax: "whoami",
        example: "whoami",
        tags: ["user", "identity", "current"],
        detailedDescription: "Whoami displays the username of the current user. It's useful for verifying which user context you're operating in, especially after using su or sudo.",
        options: [
            { flag: "whoami", description: "Display current username (no options)" }
        ],
        useCases: [
            "Check current user: whoami",
            "In scripts: if [ $(whoami) != 'root' ]; then...",
            "After su/sudo: verify user context"
        ]
    },
    {
        name: "id",
        category: "permissions",
        description: "Display user and group IDs for the current user or specified username.",
        syntax: "id [username]",
        example: "id user",
        tags: ["user", "group", "uid", "gid"],
        detailedDescription: "The id command displays user identification information including UID, GID, and group memberships. It's essential for understanding user permissions and access rights.",
        options: [
            { flag: "-u", description: "Print only effective user ID" },
            { flag: "-g", description: "Print only effective group ID" },
            { flag: "-G", description: "Print all group IDs" },
            { flag: "-n", description: "Print names instead of numbers" },
            { flag: "-r", description: "Print real ID instead of effective" },
            { flag: "username", description: "Show ID for specified user" }
        ],
        useCases: [
            "Show all IDs: id",
            "Show specific user: id username",
            "Get UID only: id -u",
            "List all groups: id -Gn"
        ]
    },
    {
        name: "groups",
        category: "permissions",
        description: "Display group memberships for a user.",
        syntax: "groups [username]",
        example: "groups",
        tags: ["user", "group", "membership"],
        detailedDescription: "The groups command shows which groups a user belongs to. Group membership determines access permissions for files and resources.",
        options: [
            { flag: "groups", description: "Show groups for current user" },
            { flag: "groups username", description: "Show groups for specified user" }
        ],
        useCases: [
            "Check your groups: groups",
            "Check user groups: groups username",
            "Verify sudo access: groups | grep sudo"
        ]
    },
    
    // Monitoring Commands
    {
        name: "ps",
        category: "monitoring",
        description: "Display currently running processes with detailed information.",
        syntax: "ps [options]",
        example: "ps aux",
        tags: ["process", "running", "list"],
        detailedDescription: "The ps command provides a snapshot of current processes. It's fundamental for system monitoring, troubleshooting, and managing running applications.",
        options: [
            { flag: "aux", description: "Show all processes with detailed info" },
            { flag: "-ef", description: "Full format listing of all processes" },
            { flag: "-u username", description: "Show processes for specific user" },
            { flag: "-p PID", description: "Show specific process by PID" },
            { flag: "-C command", description: "Show processes by command name" },
            { flag: "--forest", description: "Show process tree" },
            { flag: "-o format", description: "Custom output format" }
        ],
        useCases: [
            "All processes: ps aux",
            "User processes: ps -u username",
            "Process tree: ps auxf",
            "Find process: ps aux | grep apache"
        ]
    },
    {
        name: "top",
        category: "monitoring",
        description: "Display real-time system resource usage and running processes.",
        syntax: "top",
        example: "top",
        tags: ["monitor", "processes", "resources"],
        detailedDescription: "Top provides a dynamic real-time view of running processes, CPU usage, memory consumption, and system load. It's the go-to tool for system performance monitoring.",
        options: [
            { flag: "-d seconds", description: "Set update delay" },
            { flag: "-p PID", description: "Monitor specific process" },
            { flag: "-u username", description: "Show processes for user" },
            { flag: "-n NUM", description: "Number of iterations before exiting" },
            { flag: "-b", description: "Batch mode (useful for scripts)" },
            { flag: "k", description: "Kill a process (interactive)" },
            { flag: "M", description: "Sort by memory usage (interactive)" },
            { flag: "P", description: "Sort by CPU usage (interactive)" },
            { flag: "q", description: "Quit (interactive)" }
        ],
        useCases: [
            "Monitor system: top",
            "User processes: top -u username",
            "Batch mode: top -b -n 1 > snapshot.txt",
            "Update every 2 seconds: top -d 2"
        ]
    },
    {
        name: "htop",
        category: "monitoring",
        description: "Interactive process viewer with a user-friendly interface (enhanced alternative to top).",
        syntax: "htop",
        example: "htop",
        tags: ["monitor", "processes", "interactive"],
        detailedDescription: "Htop is an interactive process viewer with a visual interface, color-coding, and mouse support. It's more user-friendly than top and allows easy process management.",
        options: [
            { flag: "-d delay", description: "Set update delay in tenths of seconds" },
            { flag: "-u username", description: "Show processes for specific user" },
            { flag: "-p PID,PID", description: "Show only specified PIDs" },
            { flag: "-s column", description: "Sort by specified column" },
            { flag: "-t", description: "Show process tree" },
            { flag: "F2", description: "Setup menu (interactive)" },
            { flag: "F3", description: "Search processes (interactive)" },
            { flag: "F9", description: "Kill process (interactive)" }
        ],
        useCases: [
            "Launch htop: htop",
            "User processes: htop -u username",
            "Tree view: htop -t",
            "Specific PIDs: htop -p 1234,5678"
        ]
    },
    {
        name: "df",
        category: "monitoring",
        description: "Display disk space usage for all mounted filesystems.",
        syntax: "df [options]",
        example: "df -h",
        tags: ["disk", "space", "filesystem"],
        detailedDescription: "The df (disk free) command reports file system disk space usage. It's essential for monitoring storage and preventing disk space issues.",
        options: [
            { flag: "-h", description: "Human-readable sizes (KB, MB, GB)" },
            { flag: "-H", description: "Human-readable with powers of 1000" },
            { flag: "-T", description: "Show filesystem type" },
            { flag: "-i", description: "Show inode information" },
            { flag: "-t type", description: "Show only specified filesystem type" },
            { flag: "-x type", description: "Exclude specified filesystem type" },
            { flag: "--total", description: "Show grand total" }
        ],
        useCases: [
            "Check disk space: df -h",
            "With filesystem type: df -hT",
            "Show inodes: df -i",
            "Specific filesystem: df -h /"
        ]
    },
    {
        name: "du",
        category: "monitoring",
        description: "Estimate file and directory space usage.",
        syntax: "du [options] [path]",
        example: "du -sh /var/log",
        tags: ["disk", "usage", "size"],
        detailedDescription: "The du (disk usage) command estimates file space usage. It's perfect for finding what's consuming disk space and identifying large directories.",
        options: [
            { flag: "-h", description: "Human-readable sizes" },
            { flag: "-s", description: "Display only total for each argument" },
            { flag: "-c", description: "Produce grand total" },
            { flag: "-a", description: "Include files, not just directories" },
            { flag: "--max-depth=N", description: "Limit depth of directory traversal" },
            { flag: "-x", description: "Skip directories on different filesystems" },
            { flag: "--exclude=PATTERN", description: "Exclude files matching pattern" }
        ],
        useCases: [
            "Directory size: du -sh /var/log",
            "Largest directories: du -h / | sort -rh | head -20",
            "Current directory: du -sh *",
            "One level deep: du -h --max-depth=1"
        ]
    },
    {
        name: "free",
        category: "monitoring",
        description: "Display amount of free and used memory in the system.",
        syntax: "free [options]",
        example: "free -h",
        tags: ["memory", "ram", "usage"],
        detailedDescription: "The free command displays information about system memory (RAM) and swap space usage. It's essential for monitoring memory consumption and troubleshooting performance issues.",
        options: [
            { flag: "-h", description: "Human-readable output" },
            { flag: "-m", description: "Display in megabytes" },
            { flag: "-g", description: "Display in gigabytes" },
            { flag: "-s seconds", description: "Continuous updates at intervals" },
            { flag: "-c count", description: "Number of updates" },
            { flag: "-t", description: "Display total for RAM + swap" },
            { flag: "-w", description: "Wide mode (separate buffers/cache)" }
        ],
        useCases: [
            "Check memory: free -h",
            "In megabytes: free -m",
            "Continuous: free -s 2",
            "With totals: free -ht"
        ]
    },
    {
        name: "uptime",
        category: "monitoring",
        description: "Show how long the system has been running and load averages.",
        syntax: "uptime",
        example: "uptime",
        tags: ["system", "load", "time"],
        detailedDescription: "Uptime displays how long the system has been running, number of users, and the system load averages for the past 1, 5, and 15 minutes.",
        options: [
            { flag: "-p", description: "Show uptime in pretty format" },
            { flag: "-s", description: "Show system up since date/time" }
        ],
        useCases: [
            "Check uptime: uptime",
            "Pretty format: uptime -p",
            "Boot time: uptime -s",
            "In scripts: UPTIME=$(uptime -p)"
        ]
    },
    {
        name: "vmstat",
        category: "monitoring",
        description: "Report virtual memory statistics and system performance.",
        syntax: "vmstat [delay] [count]",
        example: "vmstat 1 10",
        tags: ["memory", "cpu", "performance", "statistics"],
        detailedDescription: "Vmstat reports information about processes, memory, paging, block I/O, traps, and CPU activity. It's valuable for performance analysis and troubleshooting.",
        options: [
            { flag: "delay", description: "Update interval in seconds" },
            { flag: "count", description: "Number of updates" },
            { flag: "-a", description: "Display active/inactive memory" },
            { flag: "-s", description: "Display memory statistics" },
            { flag: "-d", description: "Display disk statistics" },
            { flag: "-p partition", description: "Display partition statistics" }
        ],
        useCases: [
            "Basic usage: vmstat",
            "Continuous: vmstat 2",
            "10 samples: vmstat 1 10",
            "Memory stats: vmstat -s"
        ]
    },
    {
        name: "iostat",
        category: "monitoring",
        description: "Report CPU and I/O statistics for devices and partitions.",
        syntax: "iostat [options] [interval] [count]",
        example: "iostat -x 1 5",
        tags: ["io", "disk", "performance", "cpu"],
        detailedDescription: "Iostat monitors system input/output device loading by observing the time devices are active. It's crucial for identifying I/O bottlenecks.",
        options: [
            { flag: "-c", description: "Display CPU utilization only" },
            { flag: "-d", description: "Display device utilization only" },
            { flag: "-x", description: "Extended statistics" },
            { flag: "-p device", description: "Display statistics for specific device" },
            { flag: "-h", description: "Human-readable output" },
            { flag: "-m", description: "Display statistics in MB/s" }
        ],
        useCases: [
            "Basic stats: iostat",
            "Extended stats: iostat -x",
            "Continuous: iostat -x 2",
            "Specific device: iostat -x sda"
        ]
    },
    
    // Forensics Commands
    {
        name: "grep",
        category: "forensics",
        description: "Search for patterns in files using regular expressions.",
        syntax: "grep [options] pattern [file]",
        example: "grep -r 'error' /var/log",
        tags: ["search", "pattern", "text"],
        detailedDescription: "Grep searches for patterns in files using regular expressions. It's essential for log analysis, finding specific text, and forensic investigations.",
        options: [
            { flag: "-i", description: "Case-insensitive search" },
            { flag: "-r or -R", description: "Recursive search through directories" },
            { flag: "-v", description: "Invert match (show non-matching lines)" },
            { flag: "-n", description: "Show line numbers" },
            { flag: "-c", description: "Count matching lines" },
            { flag: "-l", description: "List files with matches" },
            { flag: "-A NUM", description: "Show NUM lines after match" },
            { flag: "-B NUM", description: "Show NUM lines before match" },
            { flag: "-C NUM", description: "Show NUM lines before and after match" },
            { flag: "-E", description: "Extended regex (same as egrep)" },
            { flag: "-w", description: "Match whole words only" }
        ],
        useCases: [
            "Search logs: grep 'error' /var/log/syslog",
            "Recursive search: grep -r 'password' /etc",
            "Case-insensitive: grep -i 'failed' auth.log",
            "With context: grep -C 3 'exception' app.log"
        ]
    },
    {
        name: "strings",
        category: "forensics",
        description: "Extract printable strings from binary files for analysis.",
        syntax: "strings [file]",
        example: "strings suspicious.exe",
        tags: ["binary", "extract", "text"],
        detailedDescription: "Strings extracts readable text from binary files. It's invaluable for malware analysis, finding hidden information, and reverse engineering.",
        options: [
            { flag: "-a", description: "Scan entire file (default for binary files)" },
            { flag: "-n NUM", description: "Minimum string length (default 4)" },
            { flag: "-t format", description: "Print offset (d=decimal, o=octal, x=hex)" },
            { flag: "-e encoding", description: "Select character encoding" },
            { flag: "-f", description: "Print file name before each string" }
        ],
        useCases: [
            "Extract strings: strings malware.bin",
            "Min length 8: strings -n 8 file.exe",
            "With offsets: strings -t x binary.dat",
            "Search in strings: strings file.bin | grep 'http'"
        ]
    },
    {
        name: "file",
        category: "forensics",
        description: "Determine file type by examining file contents and magic numbers.",
        syntax: "file [file]",
        example: "file unknown.dat",
        tags: ["type", "identify", "magic"],
        detailedDescription: "The file command identifies file types by examining their content and magic numbers, regardless of file extension. Essential for forensic analysis.",
        options: [
            { flag: "-b", description: "Brief mode (omit file name)" },
            { flag: "-i", description: "Output MIME type" },
            { flag: "-z", description: "Look inside compressed files" },
            { flag: "-L", description: "Follow symbolic links" },
            { flag: "-s", description: "Read block/character special files" }
        ],
        useCases: [
            "Identify file: file mysterious.dat",
            "MIME type: file -i document",
            "Multiple files: file *",
            "Check compressed: file -z archive.gz"
        ]
    },
    {
        name: "md5sum",
        category: "forensics",
        description: "Calculate and verify MD5 hash checksums for file integrity verification.",
        syntax: "md5sum [file]",
        example: "md5sum file.iso",
        tags: ["hash", "checksum", "integrity"],
        detailedDescription: "MD5sum calculates MD5 cryptographic hashes of files. While MD5 is deprecated for security, it's still useful for file integrity verification and forensics.",
        options: [
            { flag: "-c file", description: "Verify checksums from file" },
            { flag: "-b", description: "Read in binary mode" },
            { flag: "-t", description: "Read in text mode" },
            { flag: "--quiet", description: "Don't print OK for verified files" }
        ],
        useCases: [
            "Calculate hash: md5sum file.zip",
            "Verify integrity: md5sum -c checksums.md5",
            "Multiple files: md5sum *.iso > hashes.txt",
            "Compare: md5sum file1 file2"
        ],
        securityTips: [
            "MD5 is cryptographically broken - use SHA-256 for security",
            "Use for file integrity checks, not security",
            "Always verify downloaded files against published checksums"
        ]
    },
    {
        name: "sha256sum",
        category: "forensics",
        description: "Calculate and verify SHA-256 hash checksums for file integrity verification.",
        syntax: "sha256sum [file]",
        example: "sha256sum document.pdf",
        tags: ["hash", "checksum", "integrity"],
        detailedDescription: "SHA256sum calculates SHA-256 cryptographic hashes. It's the current standard for file integrity verification and digital forensics.",
        options: [
            { flag: "-c file", description: "Verify checksums from file" },
            { flag: "-b", description: "Read in binary mode" },
            { flag: "-t", description: "Read in text mode" },
            { flag: "--quiet", description: "Don't print OK for verified files" },
            { flag: "--strict", description: "Exit non-zero for improperly formatted checksum lines" }
        ],
        useCases: [
            "Calculate hash: sha256sum important.zip",
            "Verify file: sha256sum -c checksums.sha256",
            "Create checksum file: sha256sum * > SHA256SUMS",
            "Chain of custody: sha256sum evidence.img"
        ],
        securityTips: [
            "SHA-256 is currently secure for cryptographic purposes",
            "Always document hashes for forensic evidence",
            "Use for verifying downloaded software integrity"
        ]
    },
    {
        name: "lsof",
        category: "forensics",
        description: "List open files and the processes that opened them.",
        syntax: "lsof [options]",
        example: "lsof -i :80",
        tags: ["files", "processes", "open"],
        detailedDescription: "Lsof (List Open Files) displays information about files opened by processes. In Linux, everything is a file, making lsof incredibly powerful for forensics and troubleshooting.",
        options: [
            { flag: "-i", description: "List network connections" },
            { flag: "-i :port", description: "Show connections on specific port" },
            { flag: "-p PID", description: "List files opened by process ID" },
            { flag: "-u username", description: "List files opened by user" },
            { flag: "-c command", description: "List files opened by command" },
            { flag: "+D directory", description: "List files in directory tree" },
            { flag: "-t", description: "Terse output (PIDs only)" },
            { flag: "-n", description: "Don't resolve hostnames (faster)" }
        ],
        useCases: [
            "Network connections: lsof -i",
            "Specific port: lsof -i :22",
            "Process files: lsof -p 1234",
            "Who's using file: lsof /var/log/syslog"
        ]
    },
    {
        name: "strace",
        category: "forensics",
        description: "Trace system calls and signals for debugging and analysis.",
        syntax: "strace [command]",
        example: "strace -p 1234",
        tags: ["trace", "syscalls", "debug"],
        detailedDescription: "Strace traces system calls made by programs. It's invaluable for debugging, understanding program behavior, and malware analysis.",
        options: [
            { flag: "-p PID", description: "Attach to running process" },
            { flag: "-e trace=set", description: "Trace specific system calls" },
            { flag: "-c", description: "Count calls, time, and errors" },
            { flag: "-o file", description: "Write output to file" },
            { flag: "-f", description: "Follow child processes" },
            { flag: "-t", description: "Prefix with time of day" },
            { flag: "-tt", description: "Prefix with time including microseconds" },
            { flag: "-s size", description: "Max string size to print (default 32)" }
        ],
        useCases: [
            "Trace program: strace ./program",
            "Attach to process: strace -p 1234",
            "Network calls: strace -e trace=network curl example.com",
            "File operations: strace -e trace=open,read,write command"
        ]
    },
    {
        name: "last",
        category: "forensics",
        description: "Display list of last logged in users with login times.",
        syntax: "last [options]",
        example: "last -n 10",
        tags: ["login", "users", "history"],
        detailedDescription: "Last reads from /var/log/wtmp to show login history. It's essential for security auditing and tracking user activity.",
        options: [
            { flag: "-n NUM", description: "Display last NUM lines" },
            { flag: "-a", description: "Display hostname in last column" },
            { flag: "-d", description: "Translate IP to hostname" },
            { flag: "-F", description: "Display full login/logout times" },
            { flag: "-i", description: "Display IP numbers in numbers-and-dots notation" },
            { flag: "-w", description: "Display full user and domain names" },
            { flag: "-x", description: "Display system shutdown entries" }
        ],
        useCases: [
            "View recent logins: last -n 20",
            "Specific user: last username",
            "Today's logins: last -s today",
            "Reboot history: last reboot"
        ],
        securityTips: [
            "Check for unusual login times",
            "Look for unknown IP addresses",
            "Compare with authorized user list",
            "Logs can be cleared by attackers"
        ]
    },
    {
        name: "history",
        category: "forensics",
        description: "Display command history for the current user session.",
        syntax: "history",
        example: "history | grep ssh",
        tags: ["commands", "history", "audit"],
        detailedDescription: "History shows the command history for the current shell session. It's useful for forensics, auditing user activity, and repeating previous commands.",
        options: [
            { flag: "history", description: "Display all history" },
            { flag: "history N", description: "Display last N commands" },
            { flag: "history -c", description: "Clear history" },
            { flag: "history -d N", description: "Delete entry at position N" },
            { flag: "history -w", description: "Write current history to history file" },
            { flag: "!N", description: "Execute command number N" },
            { flag: "!!", description: "Execute last command" },
            { flag: "!string", description: "Execute most recent command starting with string" }
        ],
        useCases: [
            "View history: history",
            "Last 20: history 20",
            "Search history: history | grep 'docker'",
            "Repeat command: !123"
        ],
        securityTips: [
            "History can be cleared by attackers",
            "Consider HISTFILE location for persistence",
            "Use HISTTIMEFORMAT to include timestamps",
            "Sensitive commands with leading space won't be saved (if HISTCONTROL=ignorespace)"
        ]
    },
    {
        name: "w",
        category: "forensics",
        description: "Show who is logged in and what they are doing.",
        syntax: "w [options]",
        example: "w",
        tags: ["users", "logged", "activity"],
        detailedDescription: "The w command displays information about users currently logged in and their processes. It combines information from who, uptime, and ps.",
        options: [
            { flag: "-h", description: "Don't print header" },
            { flag: "-s", description: "Short format" },
            { flag: "-f", description: "Toggle printing FROM field" },
            { flag: "-i", description: "Display IP address instead of hostname" },
            { flag: "username", description: "Show only specified user" }
        ],
        useCases: [
            "See all users: w",
            "Specific user: w username",
            "No header: w -h",
            "With IPs: w -i"
        ],
        securityTips: [
            "Monitor for suspicious user sessions",
            "Check WHAT column for unauthorized commands",
            "Look for users logged in from unexpected locations",
            "Cross-reference with authorized access times"
        ]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const commandsContainer = document.getElementById('commandsContainer');
const filterTabs = document.querySelectorAll('.filter-tab');
const categoryCards = document.querySelectorAll('.category-card');

let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayCommands(commands);
    
    // Check if there's a category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        // Update filter tabs
        filterTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-filter') === categoryParam) {
                tab.classList.add('active');
            }
        });
        currentFilter = categoryParam;
        filterCommands(categoryParam);
    }
    
    setupEventListeners();
});

// Display Commands
function displayCommands(commandsToShow) {
    commandsContainer.innerHTML = '';
    
    if (commandsToShow.length === 0) {
        commandsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3 style="color: var(--text-secondary); font-size: 1.5rem;">No commands found</h3>
                <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try a different search term or filter</p>
            </div>
        `;
        return;
    }
    
    commandsToShow.forEach((cmd, index) => {
        const card = document.createElement('div');
        card.className = 'command-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="learn-more-overlay">Learn More →</div>
            <div class="command-header">
                <span class="command-name">${cmd.name}</span>
                <span class="command-badge badge-${cmd.category}">${cmd.category}</span>
            </div>
            <p class="command-description">${cmd.description}</p>
            <div class="command-syntax">
                <code>${cmd.syntax}</code>
            </div>
            <div class="command-example">
                <div class="command-example-title">Example:</div>
                <code>${cmd.example}</code>
            </div>
        `;
        
        // Add click event to navigate to detail page
        card.addEventListener('click', () => {
            localStorage.setItem('selectedCommand', JSON.stringify(cmd));
            window.location.href = 'pages/command-detail.html';
        });
        
        commandsContainer.appendChild(card);
    });
}

// Filter Commands
function filterCommands(category) {
    currentFilter = category;
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    let filtered = commands;
    
    if (category !== 'all') {
        filtered = filtered.filter(cmd => cmd.category === category);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(cmd => {
            // Check if command name starts with search term (highest priority)
            if (cmd.name.toLowerCase().startsWith(searchTerm)) return true;
            
            // Check if command name includes search term
            if (cmd.name.toLowerCase().includes(searchTerm)) return true;
            
            // Check description
            if (cmd.description.toLowerCase().includes(searchTerm)) return true;
            
            // Check tags (exact word match or starts with)
            return cmd.tags.some(tag => {
                const tagLower = tag.toLowerCase();
                return tagLower === searchTerm || tagLower.startsWith(searchTerm);
            });
        });
        
        // Sort results: exact matches first, then startsWith, then includes
        filtered.sort((a, b) => {
            const aNameLower = a.name.toLowerCase();
            const bNameLower = b.name.toLowerCase();
            
            if (aNameLower === searchTerm && bNameLower !== searchTerm) return -1;
            if (bNameLower === searchTerm && aNameLower !== searchTerm) return 1;
            if (aNameLower.startsWith(searchTerm) && !bNameLower.startsWith(searchTerm)) return -1;
            if (bNameLower.startsWith(searchTerm) && !aNameLower.startsWith(searchTerm)) return 1;
            
            return 0;
        });
    }
    
    displayCommands(filtered);
}

// Search Functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    let filtered = commands;
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(cmd => cmd.category === currentFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(cmd => {
            // Check if command name starts with search term (highest priority)
            if (cmd.name.toLowerCase().startsWith(searchTerm)) return true;
            
            // Check if command name includes search term
            if (cmd.name.toLowerCase().includes(searchTerm)) return true;
            
            // Check description
            if (cmd.description.toLowerCase().includes(searchTerm)) return true;
            
            // Check tags (exact word match or starts with)
            return cmd.tags.some(tag => {
                const tagLower = tag.toLowerCase();
                return tagLower === searchTerm || tagLower.startsWith(searchTerm);
            });
        });
        
        // Sort results: exact matches first, then startsWith, then includes
        filtered.sort((a, b) => {
            const aNameLower = a.name.toLowerCase();
            const bNameLower = b.name.toLowerCase();
            
            if (aNameLower === searchTerm && bNameLower !== searchTerm) return -1;
            if (bNameLower === searchTerm && aNameLower !== searchTerm) return 1;
            if (aNameLower.startsWith(searchTerm) && !bNameLower.startsWith(searchTerm)) return -1;
            if (bNameLower.startsWith(searchTerm) && !aNameLower.startsWith(searchTerm)) return 1;
            
            return 0;
        });
    }
    
    displayCommands(filtered);
}

// Setup Event Listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', handleSearch);
    
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            filterCommands(filter);
        });
    });
    
    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            // Update filter tabs
            filterTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('data-filter') === category) {
                    tab.classList.add('active');
                }
            });
            
            // Scroll to commands section
            document.getElementById('commands').scrollIntoView({ behavior: 'smooth' });
            
            // Filter commands
            filterCommands(category);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 600) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
