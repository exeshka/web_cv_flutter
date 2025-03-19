'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ec3086a028021092f1405bf9e1ce443d",
"version.json": "f1ffb7d06cca5854405e27e596e0e804",
"index.html": "3df982e2ebbbbb88ed104f4f75a19b1b",
"/": "3df982e2ebbbbb88ed104f4f75a19b1b",
"CNAME": "d3d84be1c143320540b7cf512687342f",
"main.dart.js": "5a5c558c9792637d5d1daa0a5cc2f2fc",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4277267b46a5729f63fb275354d89827",
".git/ORIG_HEAD": "8079e6bf5d293f47c46481026ca537d5",
".git/config": "ff89bec1087cdb9292deea0e24ef026e",
".git/objects/61/4ea97221bd1e4b79024049c5108fd5c72b6b29": "55b733729ccf95c0eeda7055b7d3a265",
".git/objects/95/ab973f323f47b720993719a8aec15b0883cfd5": "fc1b576764ffb53b791f7e3c8b3dc6f7",
".git/objects/66/39e32801ab7a5fab29b1cba54ffab2d5df446e": "4f0f21ebbdb7dec89430347ccbcbfb87",
".git/objects/66/ec1fdba7a3d08b8061cf1ab43343cb6c99010e": "72b1efa4a396fa7166b69b1e2ec119fa",
".git/objects/57/061f94451b511c115fe6d32c91609caec3376c": "2a24b843b1dff2afdb90cd6ceb1101a1",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/41ade3d2448d4db432081c978a0d899d8dcc55": "7a4c4f16f5b5b3fcd14da8fc4271ca34",
".git/objects/9b/79f4650360bc77efb4800006e71af5108fd4b6": "6e10b328bba8dca36f668ba64e1f597e",
".git/objects/9e/7e4a87692a2b48eac2dc7170129bf1e236ffad": "907a83afcdf4512045a6b24c0c534618",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/d2885005b993d98d60a5e60e4b81b92fc1aaad": "558dab3ccd2a049f86c95892e04d8da0",
".git/objects/94/ed4a7037b38f5ed6cd47722005811d7aa4369e": "778a6a6946f9e5b7d486062859cbc842",
".git/objects/60/945552bd06b85d105d518f010895ae6484df84": "da8e38cae534d3b7f2d9fe23f3f14c8e",
".git/objects/34/27be90c6eeb9df43357df25fd399639f75a51e": "6e5d1e65bade61e78dd9c3e479671eb1",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b2/04d1670e4b305129f37b095584f884cbaaa4c7": "e18e68afc3445cf408c07869c4221c23",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/7dbd373110d208a398109d1cb4f3e4f840b467": "1ca575aa0e902ea6c18452b94b51903f",
".git/objects/a2/59056cc231c557066952a262df96f51c11a513": "8a9609c59cdb4f6bc2d30c7cc751abef",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3e5d19209e515389c1f6e073f0eba5646b5756": "b57a42a8934ad92afbb770f1abcf7a8b",
".git/objects/d8/0079651a428782ad82fd1d03d53503485a52c4": "e4a55251d49a6b4afb67306008493f2a",
".git/objects/ab/e8f6f3e55c67b61dae3efd3533fd82c6f48e0d": "f72ff0fa92b6494aecf1d02d69e1f2f8",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c7b023993e170bd2e8fa033bcc301e936beab9": "1b36b1253e6587f763b7ea2bbdbd8cab",
".git/objects/c0/e0fe5470928575fe5cd10a2e65e021a570b8f2": "ac54b09de9d149312c183342a5572a3e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/83eef4158c72c2dcdbb380fa72fc74f14c2416": "c5e11431e0bafb3f384d4cbbeed810aa",
".git/objects/c8/466c6242a3a737a1f0e62bb6c929f2de171ffc": "6c67e18230a57024e58898ee6391e838",
".git/objects/ed/0d09bdad97039774512bbd6f83532ab637245e": "57bcbe28a9b16d933d38ba9515f043e7",
".git/objects/20/7f4bfce27ae1dd77283f874c28aece65285d02": "82c560f867f4f3ef97dea6ad5492b5bf",
".git/objects/18/ed192617d1f4f0173a0ad8fd05ef828f290813": "ab87cb609aebd7fad06cc8cdab993ea7",
".git/objects/16/06406631157392512a47a83998d7bccb52f6dc": "73a1b24158092a7e7a9acda9e3374ae4",
".git/objects/42/2f4bc836f4a1ba1c6525494e95586501804181": "cc02d6ae17a9221c65bb7f5fa0075938",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/bc8778042150dc3db21ad570ec74ef561f14d4": "5999395aec8b3f7ffefa4a810acdecda",
".git/objects/7e/61e68a6668092b9a1fbce17766f63f0ab9a15c": "6d09f5c74bf17cd5185a8ff5c3884aa8",
".git/objects/26/7d3cccdf95f9df8a9887b8f7fabdaae2499d35": "071498416482749f3b64d153ed7d9437",
".git/objects/72/7f983f90c6cbdfefe8636c877eeca52069067c": "c5273675f494b28757be98c628647ec4",
".git/objects/43/06fe03d255dccb99facb580d2d53bcdc651d94": "9a058f8f1e3471afbd97d81c01ffc203",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/de933f9f665ff07ae32a954c4843befda8a2c5": "5f652961435af62a31537677bee73930",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/8d1f5db71a877e28abd67b880d048d77bf90f2": "16df6c972ef5f227ba1eb3832094dedc",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/53/9ae1d596160bbfa62bbd2e89d00b4046706c4e": "21f144a879a6ecbefc770994dcedfbf2",
".git/objects/30/7a0bef64d7f1aa728fdfa11fc8280cc0bb9ee4": "c343bf353e10bb66c53bfeaec6385a91",
".git/objects/37/b3409e06738d5dd4fa2c0b0d644ef40aec5ca8": "4420c61f3ddcb5671bcc427b103d7744",
".git/objects/6c/c5af8b101535011690928b62acdf6b118f1c68": "29d482caa87f9643a2718c883e577970",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/5416fcd9dad677a878b75d0c38b1271eac5123": "6232adac1797fe4b1e543a54f7656a4d",
".git/objects/d5/a750dfc9a6159141bc5ca34137a371081fe80c": "cbb0f18cf69009e7a52b46f467c5360d",
".git/objects/d5/01f1429e25097621e1802423f1eebd759d0036": "babe0fad5c3498dc87275887e55bd7ae",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "87b0c4cbc0d8b799df3a50cce3dd305e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0b086e6f785fee392123a564ae044efedfcd3d": "5c68a3e8960ba1be4dd07674370ac82f",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/cc/625e6675eca6f6fbcd0d436c2bec301377c8c9": "f08eaab9329068b0b262562bca5e1257",
".git/objects/cc/6a2bfd0b9b1f23f06943cc975c028345b5f7e1": "87523c1b852fb5824c187836b6c96790",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/e8/fc0df1614077b4c279392c30cc209ec67d475d": "e6fa3e5c5ecce253a086c4cbc50771b5",
".git/objects/fa/79cf8f9107e5aad5bf985ac74890dcb27da207": "75bab0eae53bbd68fe1f48f5b617eeb5",
".git/objects/fa/afd8955a0189783173dcb77ddbc940ea2b875b": "cfa2708ed8ca1b4897d1a1f076460f38",
".git/objects/c5/0bd6a8b5327912330ceb96be2cae147960bb7d": "74ca043c4b70f34f07c4de1f35a2eb10",
".git/objects/c5/c2b27ca56ec7a8c2c1513938bebb466554384b": "7ef78b7f8cb03a7ec8deef01cca15e79",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/e2c25738676586180828784571224e3899f2d0": "1aec7717948f978a92a62fc3d01f6dff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/4ad6807440f7c2ad2d0ff499eb64668f85e739": "65ff66ed71ba891aa5e1bdef9bc9f04b",
".git/objects/41/7b7a97838c0337c2bd9fb9e3158c26f61af213": "9632dcc21e52128c50eb05cf32c0e173",
".git/objects/48/07d0c85e148b3d0a7a105b6f14e63f83511b0d": "19d04fefa673887e84a155356d9990b0",
".git/objects/23/656140a30478085f13201d8afda518d41863cb": "c09dfbfaf259102d7af8cffd741ef977",
".git/objects/4f/d8bd2e614ef314629a21a32a3041ed8d18cfd7": "6cebab560a5be905086459c73ff258dc",
".git/objects/85/60eb4efd6099cc75b81c7e32a4c246c18ec5f2": "913ea0462dee9883ac2f277c0f79daca",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/f067d3c242c5cb8056199f430d56f2840fce65": "5addbe23fbb2540deba2bfda757eeb47",
".git/objects/8b/e2c7d4dcd76abf0690f4fe03f44307d0fe2a06": "31539181bc1aaa8de6c5edcad24b5abd",
".git/objects/25/b0bd9dd281688843051e638be142f3ac23f74d": "8eb11aaa47a01c86999423e113260e91",
".git/objects/25/b6f2e89ee8d1897cc8b3b38218f668d1229c73": "d6d49b0f5c96a1437e00f2e585d86cd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e96859f3d71b5564c92df984dcf20546",
".git/logs/refs/heads/main": "e96859f3d71b5564c92df984dcf20546",
".git/logs/refs/remotes/origin/main": "656e631f15e334b1a833da2d373a743d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8079e6bf5d293f47c46481026ca537d5",
".git/refs/remotes/origin/main": "8079e6bf5d293f47c46481026ca537d5",
".git/index": "3360d03b12494a15a1d6fb9b9d86a502",
".git/COMMIT_EDITMSG": "a6a1034639e2b87a73b812e6ab99952f",
".git/FETCH_HEAD": "1168e7dd176cd73939e7b0f83b7c85d0",
"assets/AssetManifest.json": "b30431d86c2558921c2ac1634bae1c4c",
"assets/NOTICES": "5949c8ac0bc672df37d8890c945121f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "24cc1c8af7d95cb72e9548de0f46b714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "be60ea864addcb5a84987fedffe828cc",
"assets/fonts/MaterialIcons-Regular.otf": "3eed65d5aaac108236c7f0859b145b1e",
"assets/assets/img/iphone.png": "f94e1c810a3d8b655f7919cf5bac29d9",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
