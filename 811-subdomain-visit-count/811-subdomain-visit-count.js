/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const subdomainCountMap = new Map();
    cpdomains.forEach((cpdomain, index) => {
        const splitted = cpdomain.split(' ');
        const count = splitted[0];
        const domain = splitted[1];
        const subdomains = domain.split('.');
        let current = '';
        for (let i = subdomains.length - 1; i >= 0; i--) {
            i === subdomains.length - 1 ? current = subdomains[i] : current = `${subdomains[i]}.${current}`;            
            if (subdomainCountMap.has(current)) {
                subdomainCountMap.set(current, subdomainCountMap.get(current) + parseInt(count));
                continue;
            }
            subdomainCountMap.set(current, parseInt(count, 10));
        }
    });
    const res = [];
    for (let subdomain of subdomainCountMap.keys()) {
        res.push(`${subdomainCountMap.get(subdomain)} ${subdomain}`);
    }
    return res;
};