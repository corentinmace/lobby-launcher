// Release notes, newest first. The website shows them, and scripts/publish-release.mjs (private
// repo) uses the entry of the version it publishes as the GitHub release notes.
// Kinds: "new", "improved", "fixed".
window.CHANGELOG = [
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
