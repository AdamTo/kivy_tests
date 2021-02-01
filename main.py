from kivy.app import App
from kivy.uix.label import Label
import runserver
import _thread


class MainApp(App):
    def build(self):
        _thread.start_new_thread(runserver.main, ())
        text = 'a'
        text = runserver.info

        label = Label(text=text)

        return label


if __name__ == '__main__':
    app = MainApp()
    app.run()
