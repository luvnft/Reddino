// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $api_vote from "./routes/api/vote.ts";
import * as $auth_login from "./routes/auth/login.tsx";
import * as $auth_logout from "./routes/auth/logout.tsx";
import * as $auth_signup from "./routes/auth/signup.tsx";
import * as $index from "./routes/index.tsx";
import * as $r_name_post_index from "./routes/r/[name]/[post]/index.tsx";
import * as $r_name_index from "./routes/r/[name]/index.tsx";
import * as $r_name_post from "./routes/r/[name]/post.tsx";
import * as $r_create from "./routes/r/create.tsx";
import * as $r_index from "./routes/r/index.tsx";
import * as $settings from "./routes/settings.tsx";
import * as $u_name_index from "./routes/u/[name]/index.tsx";
import * as $u_index from "./routes/u/index.tsx";
import * as $VoteUI from "./islands/VoteUI.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
	routes: {
		"./routes/_app.tsx": $_app,
		"./routes/api/vote.ts": $api_vote,
		"./routes/auth/login.tsx": $auth_login,
		"./routes/auth/logout.tsx": $auth_logout,
		"./routes/auth/signup.tsx": $auth_signup,
		"./routes/index.tsx": $index,
		"./routes/r/[name]/[post]/index.tsx": $r_name_post_index,
		"./routes/r/[name]/index.tsx": $r_name_index,
		"./routes/r/[name]/post.tsx": $r_name_post,
		"./routes/r/create.tsx": $r_create,
		"./routes/r/index.tsx": $r_index,
		"./routes/settings.tsx": $settings,
		"./routes/u/[name]/index.tsx": $u_name_index,
		"./routes/u/index.tsx": $u_index,
	},
	islands: {
		"./islands/VoteUI.tsx": $VoteUI,
	},
	baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
