const prime = {a:2,b:3,c:5,d:7,e:11,f:13,g:17,h:19,i:23,j:29,
    k:31,l:37,m:41,n:43,o:47,p:53,q:59,r:61,s:67,t:71,u:73,v:79,
    w:83,x:89,y:97,z:101}
    var checkInclusion = function(s1, s2) {
        let num = 0;
        let den = 0;
        for(let i = 0; i < s1.length; i++){
            num += prime[s1[i]] * prime[s1[i]];
            den += prime[s2[i]] * prime[s2[i]]; 
        }
        if(num ===  den) return true;
        let j = s1.length;
        for(let i = j; i < s2.length; i++){
            den = den + prime[s2[i]] * prime[s2[i]] - (prime[s2[i - j]] * prime[s2[i - j]]);
            if(num  === den) return true;
        }
        return false;
    };