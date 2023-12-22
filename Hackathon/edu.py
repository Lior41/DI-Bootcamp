class HistoricalEvent:
   
    def __init__(self, date, description):
        self.date = date
        self.description = description

    def __str__(self):
        return f"Date: {self.date}\nDescription: {self.description}\n"

class Timeline:
   
    def __init__(self, name):
        self.name = name
        self.events = []

    def add_event(self, event):
        self.events.append(event)

    def display_timeline(self):
        print(f"Timeline: {self.name}\n" + "-" * 40)
        for event in sorted(self.events, key=lambda e: e.date):
            print(event)

class MythVsReality:
    
    def __init__(self, myth, reality):
        self.myth = myth
        self.reality = reality

    def __str__(self):
        return f"Myth: {self.myth}\nReality: {self.reality}\n"

class MythsSection:
    
    def __init__(self):
        self.myths_vs_realities = []

    def add_myth(self, myth_vs_reality):
        self.myths_vs_realities.append(myth_vs_reality)

    def display_section(self):
        print("Myths vs Realities\n" + "-" * 40)
        for mvr in self.myths_vs_realities:
            print(mvr)

antisemitism_timeline = Timeline("History of Antisemitism")
events = [
    HistoricalEvent("1096", "First Crusades and massacres of Jewish communities in Europe."),
    HistoricalEvent("1290", "Expulsion of the Jews from England, ordered by King Edward I."),
    HistoricalEvent("1348-1350", "Jews accused of causing the Black Death."),
    HistoricalEvent("1492", "Expulsion of the Jews from Spain under the reign of the Catholic Monarchs, Ferdinand and Isabella."),
    HistoricalEvent("1881", "Start of pogroms in Tsarist Russia, leading to numerous persecutions and murders of Jews."),
    HistoricalEvent("1894", "Dreyfus Affair, a French Jewish officer falsely accused of espionage in a climate of antisemitism."),
    HistoricalEvent("1905", "Accusation of The Protocols of the Elders of Zion, a forged document purporting to reveal a Jewish plan for global domination."),
    HistoricalEvent("1933-1945", "The Holocaust - the systematic extermination of six million Jews by the Nazi regime."),
    HistoricalEvent("1948", "Following the creation of the State of Israel, rise of tensions and conflicts in the region, often accompanied by antisemitism."),
    HistoricalEvent("2017", "Murder of Sarah Halimi in Paris, an act recognized as antisemitic."),
    HistoricalEvent("2018", "Attack on the Pittsburgh synagogue, one of the deadliest antisemitic attacks on American soil."),
]

for event in events:
    antisemitism_timeline.add_event(event)

myths_section = MythsSection()
myths_vs_realities = [
    MythVsReality("Jews control the world's banks.", "This is an antisemitic stereotype with no historical or current basis."),
    MythVsReality("Jews use Christian blood for rituals.", "This is a completely false medieval legend known as the blood libel."),
    MythVsReality("The Protocols of the Elders of Zion describes a Jewish plan for world domination.", "This document has been proven to be a forgery created to spread antisemitism."),
    MythVsReality("Jews are responsible for the death of Jesus.", "This accusation has historically been used to justify persecution of Jews and is rejected by many modern theologians."),
    MythVsReality("Jews are more loyal to Israel than to their country of residence.", "This stereotype unjustly questions the loyalty of Jewish citizens."),
    MythVsReality("All Jews are rich.", "This stereotype ignores the economic and social diversity within the Jewish community."),
    MythVsReality("The Holocaust is a myth or has been exaggerated.", "The Holocaust is a well-documented historical fact, with an abundance of evidence and testimonies."),
    MythVsReality("Jews practice black magic.", "This is an old prejudice with no basis in reality."),
    MythVsReality("Jews seek to subvert governments.", "This is an antisemitic stereotype historically used to justify persecution.")
]

for mvr in myths_vs_realities:
    myths_section.add_myth(mvr)

antisemitism_timeline.display_timeline()
myths_section.display_section()
