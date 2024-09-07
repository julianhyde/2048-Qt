#include <QApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include <QTranslator>
#include <QDebug>
#include "myclass.h"
#include "settings.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);
    Settings settings(0, "2048-qt", "2048-Qt");
    settings.setVersion(QString(APP_VERSION));

    // Set from args
    for (int i = 0; i < argc; i++) {
        if (!strcmp(argv[i], "--seed")) {
            settings.setValue("seed", 12345);
        }
        if (!strcmp(argv[i], "--threes")) {
            settings.setValue("label", "Threes");
        }
        if (!strcmp(argv[i], "--help")) {
            printf("%s [options]\n", "2048-qt");
            printf("\n");
            printf("Play 2048 or Threes.\n");
            printf("\n");
            printf("Options:\n");
            printf("  --help   Print this help\n");
            printf("  --seed   Set seed for random-number generator\n");
            printf("  --threes Play Threes\n");
            exit(0);
        }
    }

    // Localization
    QString locale;
    if (settings.contains("language")) {
        locale = settings.value("language").toString();
    } else {
        locale = QLocale::system().name();
        settings.setValue("language", locale);
    }

    QTranslator translator;
    if (! locale.startsWith("en")) {
        QString tsFile = "2048-qt_" + locale;

        if (translator.load(tsFile, ":/ts")) {
            qDebug() << "Successfully loaded " + tsFile;
            app.installTranslator(&translator);
        } else {
            qDebug() << "Failed to load " + tsFile;
        }
    }

    QQmlApplicationEngine engine;

    // Access C++ object "myClass" from QML as "myClass"
    MyClass myClass;
    engine.rootContext()->setContextProperty("myClass", &myClass);

    // Access C++ object "settings" from QML as "settings"
    engine.rootContext()->setContextProperty("settings", &settings);

    engine.load(QUrl(QStringLiteral("qrc:///qml/main.qml")));

    return app.exec();
}
