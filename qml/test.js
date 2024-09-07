
// Create fake objects needed by 2048
settings = {
    value: function (name, deflt) {
        switch (name) {
        case "label":
            return "Threes";
        default:
            return 0;
        }
    }
};
Qt = {
    createComponent: function (name) {
        return {};
    }
};

t = require('./2048.js')

// Test harness ----------------------------------------------
function assertEquals(expected, actual, message) {
    if (expected != actual) {
        throw "failed: expected " + expected + ", got " + actual + ": " + message;
    }
}

// Test the test harness
assertEquals(0, 0, "0==0");

var random = t.splitmix32(12345 >>> 0)
assertEquals(537, random(1024), "random #1");
assertEquals(501, random(1024), "random #2");
assertEquals(804, random(1024), "random #3");
assertEquals(2, random(3), "random #4");
assertEquals(2, random(3), "random #5");
assertEquals(0, random(3), "random #6");
assertEquals(2, random(3), "random #7");
assertEquals(0, random(3), "random #8");
assertEquals(1, random(3), "random #9");
assertEquals(0, random(3), "random #10");

p = t.pieceGenerator(t.splitmix32(357 >>> 0));
assertEquals(1, p.next(), "piece #0");
assertEquals(2, p.next(), "piece #1");
assertEquals(4, p.next(), "piece #2"); // high piece
assertEquals(3, p.next(), "piece #3");
assertEquals(3, p.next(), "piece #4");
assertEquals(2, p.next(), "piece #5");
assertEquals(3, p.next(), "piece #6");
assertEquals(3, p.next(), "piece #7");
assertEquals(2, p.next(), "piece #8");
assertEquals(2, p.next(), "piece #9");
assertEquals(1, p.next(), "piece #10");
assertEquals(1, p.next(), "piece #11");
assertEquals(4, p.next(), "piece #12"); // 2nd high piece
assertEquals(1, p.next(), "piece #13");
assertEquals(3, p.next(), "piece #14");
assertEquals(3, p.next(), "piece #15");
assertEquals(1, p.next(), "piece #16");
assertEquals(1, p.next(), "piece #17");

// The buffer should ensure that the number of ones and twos never
// differ by more than 4. Check that.
p = t.pieceGenerator(t.splitmix32(357 >>> 0));
count = [0, 0, 0];
for (i = 0; i < 10000; i++) {
    count[p.next()]++;
    if (Math.abs(count[1] - count[2]) > 4) {
        assertEquals(count[1], count[2], "excess ones or twos");
    }
}

// -----------------------------------------------------------------------------
// Test that labelFunc returns Threes names
assertEquals("1", t.labelFunc[t.label](1), "labelFunc(1)");
assertEquals("2", t.labelFunc[t.label](2), "labelFunc(2)");
assertEquals("3", t.labelFunc[t.label](3), "labelFunc(3)");
assertEquals("6", t.labelFunc[t.label](4), "labelFunc(4)");

console.log('Test succeeeded.');
