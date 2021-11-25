class FizzBuzz {
private:
    int n;
    atomic<int> count = 1;

public:
    FizzBuzz(int n): n(n) {}

    // printFizz() outputs "fizz".
    void fizz(function<void()> printFizz) {
        for (int i = 1; i <= n/3 - n/15; ++i) {
            while (count % 3 != 0 || count % 15 == 0) this_thread::yield();
            printFizz();
            ++count;
        }
    }

    // printBuzz() outputs "buzz".
    void buzz(function<void()> printBuzz) {
        for (int i = 1; i <= n/5 - n/15; ++i) {
            while (count % 5 != 0 || count % 15 == 0) this_thread::yield();
            printBuzz();
            ++count;
        }
    }

    // printFizzBuzz() outputs "fizzbuzz".
	void fizzbuzz(function<void()> printFizzBuzz) {
        for (int i = 1; i <= n/15; ++i) {
            while (count % 15 != 0) this_thread::yield();
            printFizzBuzz();
            ++count;
        }
        
    }

    // printNumber(x) outputs "x", where x is an integer.
    void number(function<void(int)> printNumber) {
        for (int i = 1; i <= n - n/3 - n/5 + n/15; ++i) {
            while (count % 3 == 0 || count % 5 == 0) this_thread::yield();
            printNumber(count);
            ++count;
        }
    }
};