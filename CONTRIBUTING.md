# 🚀 Pull Request Tags Guide

Use the format:  
`[_TAG_] : Short description of the pull request`

Example:  
`[FEATURE] : Add biometric login support`

---

## ✨ New Features

| Tag                | Description                  |
| ------------------ | ---------------------------- |
| `[FEATURE]`        | Introduces a new feature     |
| `[ENHANCEMENT]`    | Improves an existing feature |
| `[UI-UPDATE]`      | Visual or layout improvement |
| `[UX-IMPROVEMENT]` | Enhances user experience     |

---

## 🐞 Bug Fixes

| Tag             | Description                      |
| --------------- | -------------------------------- |
| `[BUGFIX]`      | General bug fix                  |
| `[UI-FIX]`      | Fixes layout or design bugs      |
| `[CRASH-FIX]`   | Fixes crashes                    |
| `[NETWORK-FIX]` | Fixes API or network call issues |

---

## 📈 Performance & Optimization

| Tag                  | Description                               |
| -------------------- | ----------------------------------------- |
| `[PERF-IMPROVEMENT]` | Improves app performance                  |
| `[OPTIMIZATION]`     | Optimizes code, logic, or assets          |
| `[LAZY-LOADING]`     | Implements lazy-loading or deferred tasks |
| `[MEMORY-FIX]`       | Addresses memory leak issues              |

---

## 📦 Code Quality & Refactoring

| Tag          | Description                              |
| ------------ | ---------------------------------------- |
| `[REFACTOR]` | Code structure or logic refactored       |
| `[CLEANUP]`  | Removes dead code, comments, unused vars |
| `[LINT-FIX]` | Resolves ESLint/Prettier issues          |
| `[RENAME]`   | File/function/component renaming         |
| `[MIGRATE]`  | package/module/dependancy migration      |

---

## 🧪 Testing

| Tag          | Description                            |
| ------------ | -------------------------------------- |
| `[TEST]`     | Adds/updates unit or integration tests |
| `[TEST-FIX]` | Fixes broken or flaky tests            |
| `[COVERAGE]` | Increases test coverage                |

---

## 🛠️ DevOps & CI/CD

| Tag              | Description                          |
| ---------------- | ------------------------------------ |
| `[CI]`           | CI pipeline changes or fixes         |
| `[CD]`           | CD pipeline or deployment updates    |
| `[GIT-WORKFLOW]` | Git hook, commit rules, PR templates |
| `[ENV-CONFIG]`   | Changes in `.env` or config files    |

---

## 🧩 Dependencies & Packages

| Tag                   | Description                  |
| --------------------- | ---------------------------- |
| `[DEPENDENCY-ADD]`    | Adds new external dependency |
| `[DEPENDENCY-UPDATE]` | Updates existing libraries   |
| `[DEPENDENCY-REMOVE]` | Removes unused packages      |

---

## 📝 Documentation

| Tag                | Description                          |
| ------------------ | ------------------------------------ |
| `[DOCS]`           | Adds/updates documentation           |
| `[README]`         | Changes to the README file           |
| `[COMMENT-UPDATE]` | Updates code comments and doc blocks |

---

## 🌐 Localization

| Tag             | Description                          |
| --------------- | ------------------------------------ |
| `[I18N]`        | Adds or updates internationalization |
| `[TRANSLATION]` | Adds/modifies translation content    |

---

## 🧪 Miscellaneous

| Tag            | Description                                                                                |
| -------------- | ------------------------------------------------------------------------------------------ |
| `[WIP]`        | Work in Progress PR (not ready to merge)                                                   |
| `[EXPERIMENT]` | Experimental or prototype changes                                                          |
| `[HOTFIX]`     | Emergency fix for production                                                               |
| `[ROLLBACK]`   | Reverts previous changes                                                                   |
| `[TODO]`       | todos/tasks for next sprint,(tag must used with comma `,` and title must be seperated by ` |
| `[DONE]`       | todos/tasks for the sprint is done                                                         |

---

### ✅ Example Titles:

- `[BUGFIX][ANDROID] : Fix crash on login screen`
- `[FEATURE][WEB] : Add dark mode toggle for web`
- `[REFACTOR] : Split HomeScreen component into subcomponents`
- `[DOCS] : Update README with new setup instructions`
- `[WIP],[TODO]:  refactoring component | TODO: rename to 'MyComponent'`
- `[DONE]: renameed component to MyComponent`

---

# 📌 Issue Tags Guide

Use the format:  
`[_TAG_] : Short description of the issue`

Example:  
`[UI-BUG] : Button overlaps footer on smaller screens`

---

## 🐞 Bug Reports

| Tag             | Description                            |
| --------------- | -------------------------------------- |
| `[UI-BUG]`      | Visual/UI issue                        |
| `[CRASH]`       | App crashes or freezes                 |
| `[PERFORMANCE]` | General performance degradation        |
| `[NETWORK]`     | Network requests failing or timing out |
| `[ANIMATION]`   | Animation glitches or jank             |
| `[WRONG-DATA]`  | Incorrect data shown                   |
| `[SYNC-ISSUE]`  | Data sync problems across devices      |
| `[FPS-DROP]`    | Frame rate drops / UI lag              |
| `[MEMORY-LEAK]` | Memory usage issues                    |

---

## ✨ Feature Requests

| Tag               | Description                                 |
| ----------------- | ------------------------------------------- |
| `[FEATURE-REQ]`   | New feature suggestion                      |
| `[ENHANCEMENT]`   | Improvement to an existing feature          |
| `[CUSTOMIZATION]` | Request for more configurable options       |
| `[ACCESSIBILITY]` | Improvements for accessibility              |
| `[INTEGRATION]`   | Suggestion for external service integration |

---

## 🔄 Performance & Optimization

| Tag                  | Description                          |
| -------------------- | ------------------------------------ |
| `[PERF-IMPROVEMENT]` | General performance enhancements     |
| `[OPTIMIZATION]`     | Code/resource optimization           |
| `[LAZY-LOADING]`     | Suggestion to defer resource loading |
| `[MEMORY-LEAK]`      | Suspected memory issues              |
| `[FPS-DROP]`         | Drop in animation/frame performance  |

---

## 📱 Platform-Specific Issues

| Tag                | Description                |
| ------------------ | -------------------------- |
| `[ANDROID]`        | Android-specific           |
| `[IOS]`            | iOS-specific               |
| `[WEB]`            | Web-specific               |
| `[TABLET]`         | Tablet-specific            |
| `[CROSS-PLATFORM]` | Affects multiple platforms |

---

## 🔐 Auth & Security

| Tag                   | Description                    |
| --------------------- | ------------------------------ |
| `[LOGIN-ISSUE]`       | Login failure or issue         |
| `[SIGNUP-ISSUE]`      | Signup form or flow issues     |
| `[TOKEN-EXPIRED]`     | Auth token management problem  |
| `[AUTH-ERROR]`        | General auth issue             |
| `[PERMISSION-DENIED]` | Security or permission problem |

---

## 🧭 Navigation & Routing

| Tag                  | Description                           |
| -------------------- | ------------------------------------- |
| `[NAVIGATION]`       | General navigation problem            |
| `[SCREEN-NOT-FOUND]` | Missing or broken screen route        |
| `[LINK-BROKEN]`      | Broken links within the app           |
| `[ROUTING-ISSUE]`    | Route configuration or transition bug |

---

## 🔔 Notifications

| Tag               | Description                          |
| ----------------- | ------------------------------------ |
| `[NOTIF-MISSING]` | Notification not appearing           |
| `[NOTIF-DELAYED]` | Notification delayed or late         |
| `[NOTIF-WRONG]`   | Incorrect or unexpected notification |

---

## 🛠️ Backend & API

| Tag                  | Description                        |
| -------------------- | ---------------------------------- |
| `[API-ERROR]`        | Server/API call failure            |
| `[TIMEOUT]`          | Requests taking too long           |
| `[SERVER-ISSUE]`     | Backend problem or bug             |
| `[INVALID-RESPONSE]` | Malformed or wrong response format |

---

## 🎨 Design & UX

| Tag                   | Description                      |
| --------------------- | -------------------------------- |
| `[LAYOUT-ISSUE]`      | Misaligned or broken UI layout   |
| `[DARK-MODE]`         | Dark mode rendering issues       |
| `[FONT-ISSUE]`        | Typography or font inconsistency |
| `[BUTTON-MISALIGNED]` | Button out of place or misplaced |

---

## 💾 Storage & Data

| Tag              | Description                         |
| ---------------- | ----------------------------------- |
| `[DATA-LOSS]`    | Data being lost unexpectedly        |
| `[CACHE-ISSUE]`  | App not caching or caching too much |
| `[OFFLINE-MODE]` | Issues while offline                |

---

## 🌍 Localization

| Tag                   | Description                       |
| --------------------- | --------------------------------- |
| `[TRANSLATION-ISSUE]` | Incorrect or missing translations |
| `[REGIONAL-SETTINGS]` | Date/time/currency format issues  |

---

## 🔌 Integrations

| Tag                 | Description                           |
| ------------------- | ------------------------------------- |
| `[PAYMENT-ISSUE]`   | Payment gateway-related problems      |
| `[MAP-INTEGRATION]` | Issues with embedded maps             |
| `[SOCIAL-LOGIN]`    | Facebook, Google login problems       |
| `[ANALYTICS]`       | Event tracking not working or missing |

---

## 🧪 Testing

| Tag            | Description                      |
| -------------- | -------------------------------- |
| `[TEST-FAIL]`  | Unit or integration test failing |
| `[REGRESSION]` | Bug reintroduced after a fix     |
| `[EDGE-CASE]`  | Fails only in certain conditions |

---

## 🧰 Misc

| Tag               | Description                        |
| ----------------- | ---------------------------------- |
| `[VERSION-ISSUE]` | App version mismatch or outdated   |
| `[MIGRATION]`     | Data or code migration issues      |
| `[FEEDBACK]`      | General user feedback              |
| `[DOCS]`          | Documentation issue or improvement |

---

Feel free to mix tags if needed.  
Example:  
`[API-ERROR][ANDROID] : Fetching user data fails on Android only`

---
