# 2048-Qt

A clone of [2048](https://github.com/gabrielecirulli/2048), implemented in Qt.

## Features

- Cross platform
  Currently tested on Windows and Linux. Should be able to run on Mac OS X or even Android and iOS.
- Shipped with multiple variants
  - 2048
  - Degree (学位)
  - Military Rank (军衔)
  - PRC (天朝)
- Multi-language support, currently
  - English
  - French (by [Rémi Verschelde](https://github.com/akien-mga))
  - German (by [Jens John](https://github.com/2ion))
  - Polish (by [Michał Radwański](https://github.com/enedil))
  - Russian (by [Sergey Basalaev](https://github.com/SBasalaev))
  - Simplified Chinese

## Screenshots

- Classical 2048
  ![Screenshot of Classical 2048](http://i1171.photobucket.com/albums/r546/xiaoyong/2048_zps8b4bad15.png)

- 2048 Degree
  ![Screenshot of 2048 Degree](http://i1171.photobucket.com/albums/r546/xiaoyong/2048_degree_zpsb142af1f.png)

## Downloads

Check https://github.com/xiaoyong/2048-Qt/releases for compiled binary executable files. 

### Windows

All required Qt libraries have been packed into one .exe file. So it should work out of the box.

### Linux

The Qt libraries (version >= 5.2.1) are required. Make sure that they are installed on your system.

### Arch Linux

Install the AUR package [2048-qt](https://aur.archlinux.org/packages/2048-qt/) through:
```
yaourt 2048-qt
```
And please vote it if you like it.

### Debian

[Alejandro Garrido Mota](https://github.com/mogaal) has packaged it for Debian. On Debian unstable, install it through:
```
sudo apt-get install 2048-qt
```

### Gentoo
2048-Qt is available from the overlay maintained by [Jorge Pizarro Callejas](https://github.com/jorgicio):
```
layman -a jorgicio
emerge 2048-qt
```

### Ubuntu

From Ubuntu 14.10 on, install it through:
```
sudo apt-get install 2048-qt
```

## Build

Clone this repo:
```
$ git clone https://github.com/julianhyde/2048-Qt.git 2048-qt
$ cd 2048-qt
```

Install gcc, cmake, QT
and [qml quick](https://stackoverflow.com/questions/39390824/error-unknown-modules-in-qt-qml-quick-qt-creator).
On [Ubuntu](https://askubuntu.com/questions/1404263/how-do-you-install-qt-on-ubuntu22-04):
```
$ sudo apt install qtcreator qtbase5-dev qt5-qmake cmake g++ qml-module-qtquick-dialogs qml-module-qtquick-controls qml-module-qtquick-window2 libqt5quickcontrols2-5 qtdeclarative5-dev
```

If you've modified the JavaScript code, test it:
```
$ sudo apt install nodejs
$ node qml/test.js
```

Generate `Makefile`:
```
$ qmake 2048-qt.pro
```

Compile:
```
$ make
```

Run the binary:
```
$ ./2048-qt
```

Run the binary in Threes mode:
```
$ ./2048-qt --threes
```

Get help:
```
$ ./2048-qt --help
```

Clean:
```
make clean && rm -f 2048-qt Makefile .qmake.stash
```

## Todo

- Allow the user to add his own label systems
- AI support
