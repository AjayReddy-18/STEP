import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class MainTest {

    @Test
    void add() {
        Main main = new Main();
        int result = main.add(1, 2);
        assertEquals(3, result);
    }
}