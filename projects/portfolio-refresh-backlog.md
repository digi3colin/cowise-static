# Portfolio refresh backlog

Inventory date: 2026-09-06

This file tracks recent work found under `/Volumes/projects`, `/Volumes/previews`, and `/Volumes/server01`. It separates publishable case studies from projects that need a safe local preview environment or better source material.

## Published in the current refresh

| Project | Period | Portfolio page | Evidence used |
| --- | --- | --- | --- |
| InvestHK - Wealth for Good in Hong Kong Summit | 2025-2026 | `/projects/investhk-wghk/` | Onsite setup photographs and the Eventuai/InvestHK service deck |
| PCBPro.online | 2025-2026 | `/projects/pcbpro-online/` | Desktop/mobile designs, quote workflows, admin/API/Shopify source |
| Faberge x Game of Thrones | 2023 | `/projects/faberge-game-of-thrones/` | 3D assets, Unreal build, AR export, hologram prototypes and campaign photography |
| RESURGENCE - French Chamber Gala Dinner | 2023 | `/projects/fcci-resurgence/` | Immersive tunnel/mirror-room concepts, key visuals and production assets |
| Global Tourism Economy Forum | 2023 | `/projects/gtef-registration/` | Registration and ticketing presentation |
| Palace Gourmet (archive name: NY8) | 2021-2022 | `/projects/ny8-palace-gourmet/` | Full desktop designs, mobile designs, menus, locations and policy material |

Dolce & Gabbana is deliberately excluded. Its archive contains only a client-supplied concept wireframe and no Cowise design or development work.

## Next projects requiring a server preview

These archives contain runnable application code, but screenshots should be captured from an isolated local environment before publishing a case-study page.

| Priority | Project | Source | Application shape | Material still needed |
| --- | --- | --- | --- | --- |
| 1 | Park Nova | `/Volumes/previews/www/www.parknova.com` and `/Volumes/previews/www/admin.parknova.com` | KohanaJS/Fastify, Liquid, SQLite, public site and admin | Verified desktop/mobile screenshots, final project year, approved role summary |
| 2 | Les Maisons Nassim | `/Volumes/previews/www/www.lesmaisonsnassim.com.sg` and `/Volumes/previews/www/admin.lesmaisonsnassim.com.sg` | KohanaJS/Fastify, Liquid, SQLite, public site and admin | Verified screenshots, launch date, approved description of CMS/registration scope |
| 3 | MGMPC | `/Volumes/previews/www/mgmpc.occasionspr.com` and `/Volumes/previews/www/mgmpc-admin.occasionspr.com` | KohanaJS/Fastify, Liquid, SQLite, public site and admin | Full project name, screenshots, project purpose and Cowise role |
| 4 | Nova Mall campaigns | `/Volumes/previews/www/novamall.occasionspr.info` and `/Volumes/previews/www/novamall-admin.occasionspr.info` | KohanaJS/Fastify, Liquid, SQLite | Separate Summer/Christmas/CNY campaign screenshots and dates |
| 5 | Women Power Forum Hong Kong 2021 | `/Volumes/previews/www/womenpowerforumhk/2021.womenpowerforumhk.com` | KohanaJS 6/Fastify, multilingual Liquid site, SQLite | Public and admin screenshots; confirmation that event imagery may be published |
| 6 | Stecco Natura redemption | `/Volumes/previews/www/stecco-natura/stecco-natura.cowise.co` | KohanaJS/Fastify, CMS, queue, email and Twilio integrations | Public flow screenshots, redemption results and approved campaign summary |
| 7 | Art Basel RSVP 2023 | `/Volumes/projects/occasions/20230311-artbasel` | KohanaJS 6/Fastify, Liquid, four SQLite databases | Client/event identity, public RSVP screenshots, confirmation of what Cowise delivered |
| 8 | L'Oreal campaign administration | `/Volumes/server01/18.163.255.79/2021-loreal-admin.occasionspr.info` | Server backup with admin, database and public assets | Name of campaign, public-facing counterpart, screenshots and role confirmation |
| 9 | Event Activate | `/Volumes/server01/18.163.255.79/www.event-activate.com` | Server backup | Client/project name, launch year, screenshots and scope |

## Projects with visual material but incomplete case-study information

| Project | Available material | Missing before publishing |
| --- | --- | --- |
| Occasions PR company website | Artwork, content, mobile layouts and update folders under `/Volumes/projects/occasions/20210200 company website` | Final launch screenshots, exact scope and confirmation that the latest redesign belongs to Cowise |
| L'Oreal 2021 and 2022 | Mini-site exports, screens and client material | Campaign names, distinction between the two projects, final live output and Cowise role |
| MGM Awakening 2021 | Client material | Final output, project format, scope and publishable screenshots/video |
| Park Peninsula 2022 | Only a sparsely named archive folder | Almost all portfolio material: brief, visuals, final output and role |
| For Good 2023 | Email sets and supplied material | Client identity, campaign objective, final output and role |
| Le French May 2023-2024 | Event video, LED-screen and EDM assets | Final selection, project description and approval for public use |
| MGM 2024 | Dated project folder | Project identity, output, final visuals and role |
| FAB Instagram AR Filter 2021 | Spark AR projects, frames, 3D bottle and water effects | Full client/campaign name and confirmation of Cowise's role |
| Ant Moments 2025 | Badge and lanyard artwork | Project context and decision on whether print-production work belongs in the digital portfolio |

## Preview environment plan

1. Copy each selected archive into a dedicated preview workspace. Never run the only backup in place.
2. Start with the public site and defer the admin interface unless it contains important portfolio evidence.
3. Use an isolated legacy Node container per application. The 2021 projects use KohanaJS 5, Fastify 3 and `better-sqlite3` 7, so the Node version must be tested and pinned rather than using the current system runtime.
4. Copy each SQLite database into a disposable writable directory for each preview run.
5. disable outbound email, SMS, AWS, Mailgun and Twilio calls. Replace them with local logging or stubs.
6. Provide dummy environment values and test accounts. Do not reuse production credentials found in backups.
7. Bind each app to localhost on a unique port and route friendly preview hostnames through one local reverse proxy.
8. Capture desktop and mobile screenshots only after checking routes, images, fonts and seeded content.
9. Record the working runtime, command, port, database path and known limitations beside each app so the preview remains reproducible.

Suggested setup order: Park Nova, Les Maisons Nassim, MGMPC, Nova Mall, Women Power Forum, Stecco Natura, Art Basel, then the server-only backups.
