export default {
  defaultBrowser: "Google Chrome",
  options: {
    // Hide the Finicky icon from the menu bar
    hideIcon: false,
  },
  handlers: [
    {
      match: "github.com/GetJobber/*",
      browser: {
        name: "Google Chrome",
        profile: "Work",
      },
    },
    {
      match: "split.io/*",
      browser: {
        name: "Google Chrome",
        profile: "Work",
      },
    },
    {
      match: "jobber.atlassian.net/*",
      browser: {
        name: "Google Chrome",
        profile: "Work",
      },
    },
  ],
};
