# WEB103 Prework - *👉🏿 web-app*

Submitted by: **👉🏿 Rashmi Birur Subhash**

About this web app: **👉🏿 app description here**

Time spent: **👉🏿 15** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [X] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough
![Screen Recording 2024-08-21 at 23 14 58](https://github.com/user-attachments/assets/d924344c-fc92-45ae-8bc4-0669f430b26f)

Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

- There is the landing page. All the artists are shown as cards. With their titles, images, social handles, and desc as info on the cards.
- Next, we have the Add Artist flow. Where you can add all the fields. I have kept the Image URL as optional.
- To view more info on a specific artist, you can click the info icon.
- Then we can edit the artists by clicking on the pencil icon on the cards.
- To Delete an artist, there is a button in the edit flow.

Additional 
- I did not use a filter API because I did not find the need to. The GET API has the results of all the artists. So I did not think it was necessary.
- I added a back feature in the edit flow. I know there is a browser back, but I still having that button is more user friendly.

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www![Screen Recording 2024-08-21 at 23 14 58](https://github.com/user-attachments/assets/4d53ab79-543c-495a-8b46-ef0222471926)
.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

I encountered a few challenges when I was configuring the backend.
I was initially using the given policies for the table. Later, when I realized that it might get complicated for all the CRUD operations, I created my own policies in the SQL editor.
Then it was easy for me to figure out how to query the APIs.

## License

Copyright [👉🏿 yyyy] [👉🏿 name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
