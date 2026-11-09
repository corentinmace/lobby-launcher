// Release notes, newest first. The website shows them, and scripts/publish-release.mjs (private
// repo) uses the entry of the version it publishes as the GitHub release notes.
// Kinds: "new", "improved", "fixed".
window.CHANGELOG = [
  {
    version: "0.9.4",
    date: "2026-11-09",
    title: "Smoother updates",
    changes: [
      ["fixed", "Updates no longer stop with \"Failed to kill Lobby\": Lobby lets go of your controllers before the installer starts, so nothing keeps it from closing."],
    ],
  },
  {
    version: "0.9.3",
    date: "2026-11-09",
    title: "Your controller, your game",
    changes: [
      ["fixed", "Lobby lets go of your controller as soon as you switch to a game, instead of keeping it until you quit Lobby. Games and Steam Input see it right away again."],
    ],
  },
  {
    version: "0.9.2",
    date: "2026-11-07",
    title: "Lighter in the tray",
    changes: [
      ["fixed", "While Lobby sits in the tray, it no longer reads your controllers. A controller that stops responding can't keep Lobby open anymore, which could make an update fail to close it."],
    ],
  },
  {
    version: "0.9.1",
    date: "2026-11-07",
    title: "GBA saves carry over",
    changes: [
      ["fixed", "EmuDeck GBA games start in mGBA, the emulator of the Deck's Steam shortcuts, so both devices use the same save file instead of two that never meet."],
    ],
  },
  {
    version: "0.9.0",
    date: "2026-11-07",
    title: "Saves that follow you",
    changes: [
      ["new", "Play an emulated game on your PC, pick it up on your Steam Deck: with EmuDeck saves shared through Syncthing, Lobby waits for a save still coming from the other device before launching, instead of starting you on an older one."],
      ["new", "When you quit an emulated game, its save is sent to your other devices right away, and Lobby tells you once it has arrived."],
    ],
  },
  {
    version: "0.8.0",
    date: "2026-11-07",
    title: "EmuDeck games",
    changes: [
      ["new", "EmuDeck support: your ROMs show up in the library with clean names, covers and game length, and start in the emulator EmuDeck uses for their console, just like on a Steam Deck."],
      ["new", "Play time for emulated games, counted for the game you launched from Lobby."],
    ],
  },
  {
    version: "0.7.0",
    date: "2026-11-06",
    title: "Easier on the eyes and the keyboard",
    changes: [
      ["new", "The library works from the keyboard: Tab to a game, Enter to select it, Enter again to play. Every control shows a clear focus ring."],
      ["improved", "Lobby follows Windows' \"reduce animations\" setting, and pauses its animations while it sits in the tray."],
      ["improved", "Easier to read: section titles and secondary text have more contrast, and small buttons got a larger click area."],
      ["improved", "Calmer look: softer glows, a still logo, and the free games' light only moves on the card you point at."],
    ],
  },
  {
    version: "0.6.3",
    date: "2026-11-05",
    title: "Steam stays signed in",
    changes: [
      ["fixed", "The Steam sign-in renews itself again: Lobby no longer asks you to sign in after a day while your Steam session is still valid."],
    ],
  },
  {
    version: "0.6.2",
    date: "2026-11-04",
    title: "Polish",
    changes: [
      ["fixed", "Quick launch is opaque again: what's behind it no longer shows through, and its shadow no longer draws a dark box around it."],
      ["improved", "The Store's free games strip scrolls with arrows on its sides instead of a scrollbar."],
    ],
  },
  {
    version: "0.6.1",
    date: "2026-11-04",
    title: "Quick launch on your screen",
    changes: [
      ["fixed", "With several screens, quick launch opens on the one your mouse is on, instead of where it was last shown."],
    ],
  },
  {
    version: "0.6.0",
    date: "2026-11-04",
    title: "Welcome aboard",
    changes: [
      ["new", "A short introduction on first launch: what Lobby found, then your store accounts and the optional API keys, with what each one unlocks and where to find them later. See it again from Settings → General."],
      ["fixed", "Play time: an open Battle.net (or Riot Client) no longer counts as playing one of its games. The wrong sessions this recorded are removed once, so the library no longer opens on a game you didn't play."],
      ["fixed", "The close button of dialogs sits in their corner again."],
    ],
  },
  {
    version: "0.5.0",
    date: "2026-11-04",
    title: "HoYoPlay games",
    changes: [
      ["new", "HoYoPlay support: Genshin Impact, Honkai: Star Rail, Zenless Zone Zero and Honkai Impact 3rd show up in your library, start straight from Lobby, and can be uninstalled from the Storage view. A game HoYoPlay knows but whose files are gone is listed as not installed."],
      ["new", "A search field at the top of the sidebar opens quick launch, for when the shortcut isn't at hand."],
      ["fixed", "Games with a recent Steam store page (or one that was removed) get their cover from SteamGridDB instead of a blank tile."],
    ],
  },
  {
    version: "0.4.2",
    date: "2026-11-04",
    title: "Smoother quick launch",
    changes: [
      ["fixed", "Quick launch results no longer leave an empty gap while you type: the list tightens up smoothly."],
    ],
  },
  {
    version: "0.4.1",
    date: "2026-11-04",
    title: "Cleaner quick launch",
    changes: [
      ["fixed", "Quick launch no longer shows a scrollbar: your recent games fit in the panel, and longer lists still scroll with the wheel or the arrow keys."],
    ],
  },
  {
    version: "0.4.0",
    date: "2026-11-04",
    title: "Lobby updates itself",
    changes: [
      ["new", "Automatic updates: new versions install on their own, never during a game, and every installer is signed. Turn them off in Settings → Updates, and a badge at the top of the window tells you when a version is out."],
      ["new", "An Updates section in Settings: installed version, check now, what's new."],
      ["new", "A new installer in Lobby's colours, in English or French depending on Windows. It installs for your user only, without asking for administrator rights."],
      ["new", "\"What's new\" and \"Report a bug\" links at the bottom of Settings."],
      ["fixed", "With many results, the quick launch panel no longer gets cut at the bottom: the list scrolls and the shortcuts stay visible."],
    ],
  },
  {
    version: "0.3.0",
    date: "2026-11-04",
    title: "Play time for every game",
    changes: [
      ["new", "Play time is tracked for every game, even when started outside Lobby: Lobby looks at which games are running, every 10 seconds. It can be turned off in Settings, or per game."],
      ["new", "\"Past 2 weeks\" play time and a live \"Playing now\" badge on the featured game."],
      ["new", "Sign in to Steam instead of creating a Steam Web API key (the key still works as a fallback)."],
      ["new", "Sidebar sections (friends, collections, progress, platforms, launchers) open and close, and stay as you left them."],
      ["improved", "Picking a game that isn't installed in quick launch now shows it in Lobby instead of opening its store."],
      ["improved", "The Store toolbar matches the Library one, and filters look cleaner over the blurred-cover background."],
    ],
  },
  {
    version: "0.2.0",
    date: "2026-11-04",
    title: "Quick launch everywhere",
    changes: [
      ["new", "Quick launch can also list games you own but haven't installed."],
      ["new", "Choose which parts of the sidebar are shown."],
      ["new", "Clear buttons in every search field."],
      ["new", "\"Paused\" progress status."],
      ["new", ".bat and .cmd files can be added as games."],
      ["improved", "Games start exactly like a double-click in Explorer (same working folder and environment)."],
      ["improved", "The version and build date are shown in Settings."],
      ["fixed", "The library toolbar no longer overflows on narrow windows."],
    ],
  },
  {
    version: "0.1.0",
    date: "2026-11-03",
    title: "First release",
    changes: [
      ["new", "One library for Steam, Epic Games, GOG, Ubisoft Connect, EA app, Battle.net and Riot, plus games added by hand."],
      ["new", "Owned-but-not-installed games, with sign-in to Epic Games and GOG."],
      ["new", "Store: deals and price comparison from IsThereAnyDeal, a wishlist with price alerts, and this week's free games."],
      ["new", "Global quick launch bar (Ctrl+Shift+Space)."],
      ["new", "TV mode with native DualSense and Xbox controller support."],
      ["new", "Statistics, a Storage view with one-click uninstall, collections, progress statuses with notes, and a \"What should I play?\" roulette."],
      ["new", "Steam friends and achievements, game length from IGDB."],
      ["new", "Custom covers, backgrounds and logos, from SteamGridDB or your PC."],
      ["new", "Appearance settings, English and French, start with Windows, close to tray."],
    ],
  },
];
