class Foo {
private:
    atomic<int> state;
public:
    Foo() {
        state = 0;
    }

    void first(function<void()> printFirst) {      
        printFirst();
        state = 1;
    }
  
  void second(function<void()> printSecond) {
        while (state != 1)
            std::this_thread::sleep_for(1ms);
        printSecond();
        state = 2;
    }

    void third(function<void()> printThird) {
        while (state != 2)
            std::this_thread::sleep_for(1ms);
        printThird();
    }
};