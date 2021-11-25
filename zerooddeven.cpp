class ZeroEvenOdd {
private:
    int n;

    std::mutex mzero, modd, meven;
    int i;
public:
    ZeroEvenOdd(int n) {
        this->n = n;
        i = 1;
        meven.lock();
        modd.lock();
    }

    // printNumber(x) outputs "x", where x is an integer.
    void zero(function<void(int)> printNumber) {
        while(i <= n){
            mzero.lock();
            if(i > n){
                modd.unlock();
                meven.unlock();
                break;
            }
            printNumber(0);
            if(i % 2) modd.unlock();
            else meven.unlock();
        }
    }

    void even(function<void(int)> printNumber) {
        while(i <= n){
            meven.lock();
            if(i > n) break;
            printNumber(i++);
            mzero.unlock();
        }
    }

    void odd(function<void(int)> printNumber) {
        while(i <= n){
            modd.lock();
            if(i > n) break;
            printNumber(i++);
            mzero.unlock();
        }
    }
};