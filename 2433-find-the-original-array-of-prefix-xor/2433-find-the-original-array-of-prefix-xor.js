var findArray = function(pref) {
    const ary=[pref[0]];
    for(let i=1;i<pref.length;i++)
    ary.push(pref[i-1]^pref[i]);
    return ary;
};
