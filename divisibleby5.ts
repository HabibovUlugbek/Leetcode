const prefixesDivBy5 = (A, acc = 0) => A.map((d) => !(acc = (acc * 2 + d) % 5));
