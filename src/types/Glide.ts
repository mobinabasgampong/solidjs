// id: createUniqueId(),
// content: content(),
// user: {
//   nickName: "Filip99",
//   avatar:
//     "https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png",
// },
// likesCount: 0,
// subglidesCount: 0,
// date: new Date(),

import { User } from "./User";

export interface Glide {
id: string,
content: string,
user: User,
likesCount: number,
subglidesCount: number,
date: Date
}