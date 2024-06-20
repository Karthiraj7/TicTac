TicTac

## Summary

Summary: Integrating SweetAlert in React Tic-Tac-Toe Game

1. Installation and Import:

Install SweetAlert using npm:
bash
Copy code
npm install sweetalert2
Import SweetAlert and its CSS into your React component:
typescript
Copy code
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
2. Update resetGame Method:

Modify the resetGame method to use SweetAlert (Swal.fire) for confirmation:
typescript
Copy code
resetGame() {
  Swal.fire({
    title: 'Restart Game',
    text: 'Are you sure you want to restart the game?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, restart!',
  }).then((result) => {
    if (result.isConfirmed) {
      this.setState({
        board: Array(9).fill(null),
        xIsNext: true,
      });
      Swal.fire({
        title: 'Restarted!',
        text: 'Your game has been restarted.',
        icon: 'success',
      });
    }
  });
}
3. Explanation:

Confirmation Dialog (Swal.fire):

Displays a dialog with title 'Restart Game', confirmation text, and icons.
icon: 'question' for confirmation and icon: 'success' upon successful restart.
Customizes buttons (showCancelButton, confirmButtonColor, confirmButtonText).
Game State Update:

Resets the game state (board and xIsNext) upon user confirmation.
4. Rendering:

Renders the game status, board, and a restart button (<button>) using React's render method.
5. Additional Notes:

Ensure SweetAlert CSS (sweetalert2/dist/sweetalert2.css) is imported for proper styling.
SweetAlert offers extensive customization for dialogs, animations, and more to enhance user experience.

![Screenshot 2024-06-20 165312](https://github.com/Karthiraj7/TicTac/assets/108760004/c075b583-4e0a-4028-b1f7-b40c38799c9c)

![Screenshot 2024-06-20 165259](https://github.com/Karthiraj7/TicTac/assets/108760004/bf5978a6-f699-44a7-9fe3-712f7e0c8fe9)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.18.2-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
