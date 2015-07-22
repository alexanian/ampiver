# ampiver
SYDE 361 project - a smart grid sensor for ice accretion

from the Spring 2015 offering of SYDE 361. The project was a sensor to take the
place of smart grid current sensors at various points in the electrical grid and
broadcast temperature, humidity and ice presence. This allows grid management to
be warned of and alerted to icing events.

A UI mockup can be found on the **gh-pages** branch.

Reads temperature and humidity from a DHT22 using the
[Adafruit_DHT](https://github.com/russgrue/Adafruit_DHT_Library) library and
current from an SCT103 using [EmonLib](https://github.com/cinezaster/emonlib).
Both libraries were imported using the Spark Build web IDE, which behaved much
more reliably than the Spark Dev, so be aware that building & flashing this
from Spark Build with imported libraries might work better than this. The
binary firmware (downloaded from Spark Build) should work.