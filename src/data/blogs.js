// src/data/blogs.js
// Blog posts for PrintWindAI. Each entry has a slug (the URL), metadata and a markdown body.
//
// HOW TO USE
//  - Add a post: copy an entry, change slug/title/date/excerpt/body. Newest date shows first.
//  - Hide a post: set  published: false  and redeploy. It disappears from the Blog page and
//    /blog/<slug> shows the 404 page to the public. To proof it before switching it on, open
//    /blog/<slug>?preview=1 .
//  - Body is markdown (headings, tables, links, lists). Internal links use /blog/<slug> and /contact.
//    A link to a post that is switched off turns into plain text automatically.
//  - 'href' (optional) points an entry at an existing hand-built page instead of a markdown body.

const blogs = [
  {
    // Existing hand-built page (src/pages/blog-coffee.js). Template text, so switched off for launch.
    slug: "solarola-coffee-vendors",
    title: "How SolarRola changes the game for portable coffee vendors",
    author: "Paul Marshall",
    published: false, // template text still - switch to true once the article is written
    date: "2026-06-15",
    category: "Field Story",
    excerpt:
      "Mobile baristas have always been tethered to noisy, fume-belching generators. SolarRola cuts the cord — silent, clean power that rolls out wherever the coffee goes.",
    href: "/blog/solarola-coffee-vendors",
  },
  {
    slug: "event-power-easiest-problem-in-britain",
    title: "Emitting Two-Thirds of Malta's CO₂ to Party: Do We Need To?",
    subtitle:
      "Steel needs a billion-pound furnace. Clean aviation is years away. Outdoor events are already in a field, in the sun — all they need is panels and a battery. Most still run on generators.",
    author: "Paul Marshall",
    published: true, // true = shown on the Blog page; false = hidden (see notes at the top of this file)
    date: "2026-10-13",
    readMinutes: 8,
    excerpt:
      "UK events burn an estimated 380 million litres of diesel a year. Steel, cement and aviation are hard to clean up for real reasons. Temporary event power isn't one of them — and it's performing like it is.",
    category: "Background",
    body: `## Clean technology, dirty numbers

Every summer the same statistic does the rounds: UK events burn through an estimated **380 million litres of diesel a year** — more than 150 Olympic swimming pools — for **1.2 million tonnes of CO₂e**. That's roughly two-thirds of what Malta's entire economy emits in twelve months. Offsetting it would take a forest four times the size of the West Midlands, planted every single year.

But the physics underneath it isn't industry spin, and it's the part that should actually worry the sector.

**Key takeaway:** temporary power for events sits in exactly the same technology category as rooftop solar and electric cars — problems the UK has already solved, fast, at scale. But its emissions per unit of power delivered look like steel, cement or aviation: sectors everyone agrees are nearly impossible to fix.

---

## 1. The sectors that are supposed to be hard

Some processes are genuinely hard to decarbonise. There's a well-established club of industries the World Economic Forum calls "hard to abate": steel, cement, aluminium, chemicals, oil and gas, aviation, shipping, trucking. Together they're **~40% of global direct CO₂e emissions**, and their combined emissions intensity moved just **1.2% between 2022 and 2023**.

They're hard for real reasons. Steel and cement need process heat of 500–1,400°C that electrification still can't deliver economically — and in cement's case, a chunk of the emissions come from the chemical reaction itself, not the fuel burning it. Global average steel production runs **~1,890 kg CO₂ per tonne**; cement sits at **~580 kg CO₂ per tonne of cementitious material**, a figure that's fallen only **~20% since 1990**. Thirty-five years, one-fifth of the improvement the UK grid made in a single decade.

Look at what it costs to actually move one of these. Tata Steel's Port Talbot switch from blast furnace to electric arc furnace is projected to cut site emissions **~90%** — but it needed **£1.25bn** (including a £500m government grant), a groundbreaking in 2025, commissioning around 2027/28, and an estimated 3,000 jobs lost in the transition. Aviation, meanwhile, runs on fuel with roughly **50 times the energy density of a lithium-ion battery** — which is why the industry's own decarbonisation path runs through SAF and hydrogen, not batteries. Parliament's Environmental Audit Committee treats it, with shipping, as one of the two genuinely hardest UK sectors to shift.

That's what "hard to abate" actually costs: new industrial chemistry, billion-pound capital, multi-year builds, job losses along the way.

---

## 2. The sector that should already have solved this

Now put temporary event power next to that list. It needs none of it.

There's no 1,400°C process to replace, no chemical reaction baked into the product, no energy-density ceiling that rules out batteries. A festival stage, a food stall, a lighting rig — these are short-duration, fluctuating electrical loads. That's precisely the profile solar-plus-battery is good at. The kit already exists, off the shelf, today.

And the "easy" category has form. The UK grid's carbon intensity fell **70% in a decade** — 419 g CO₂e/kWh in 2014 to 124 g CO₂e/kWh in 2024 — on the back of coal phase-out and renewables hitting a record 45% of generation. Battery-electric cars went from near-zero to **23.4% of new UK registrations in 2025**, with average new-car CO₂ falling over 10% in a single year. Both moved fast because the substitute technology was already mature and commercially available — nobody had to invent new chemistry, they just had to deploy what already worked.

Mobile solar and battery power for events belongs in that pile, not the steel-and-cement one.

| Sector | What actually moved |
| :-: | :-: |
| UK power grid | −70% carbon intensity, 2014→2024 |
| UK new cars | 0% → 23.4% battery-electric, in a decade |
| Cement | −20% emissions intensity, in 35 years |
| WEF's 8 hard-to-abate sectors | −1.2% emissions intensity, 2022→23 |
| UK event generator practice | "barely changed," 2015→18 (see below) |

---

## 3. So why does it perform like the hard ones?

Reported generator load factors at events sit around **10–20%**, against an ideal of **50–70%**. That gap matters more than it sounds: diesel gensets are most efficient loaded to 40–80% of their rating. Below ~30% load, fuel burnt per kWh climbs sharply. Below ~10%, you can waste more than **60% of the diesel going in**, for a fraction of the power coming out. An unoptimised event genset can put out roughly **7x the pollutants** of the equivalent grid-connected power.

This isn't a one-off finding. A long-running Aggreko/University of the West of England monitoring programme at Glastonbury (ongoing since 2014) found the same load-factor problem in the field, which is why the festival now groups generators into "power stations" switched on and off with demand, and has trialled battery-hybrid units to lift the effective load.

Progress since has been slow enough that Julie's Bicycle told the House of Commons DCMS Select Committee that sector-wide diesel-use reduction had **"barely changed" between 2015 and 2018**. A Greener Future's 2024 sustainability survey found **72% of festivals still running generators**. ZAP Concepts, the consultancy behind the original 2019 factsheet, reckons the industry could cut diesel use by roughly **40% through better demand-matching alone** — no loss of power, no loss of quality. That's not a technology gap. That's an operating-practice gap, sitting there unclaimed for the better part of a decade.

---

## 4. The gap that widens even when nobody does anything

Here's the part that should really sting. DEFRA's 2025 conversion-factor refresh cut the grid electricity emissions factor by roughly **15%**, while penalising the diesel generator factor further. A Greener Future ran the new factors back through one 2024 event's full dataset and found reported emissions fell **15.4%** — with zero change on the ground. Same generators, same fuel, same festival. The paperwork just got greener because the national grid did.

That's the trap. Every year the grid decarbonises, the gap between "plugged in" and "diesel genset on site" gets wider — currently somewhere around **5–15x more carbon-intensive per kWh** for a typical event generator versus the grid it's usually standing in for. An operator who changes nothing looks slightly better on paper each year, purely by riding someone else's progress, while the actual emissions intensity of their own power sits still. The one "quick win" most big festivals have reached for instead is switching to HVO biofuel, which cuts net GHG roughly 90% versus mineral diesel — genuinely useful, but still a substitute fuel through the same combustion kit, not the structural fix.

---

## 5. What's actually at stake

This isn't a fringe sector. UK outdoor events carry an estimated **£25bn+ in direct annual economic value** — the largest single component of a wider UK events industry now put at **£68.7bn**. There were **592 music festivals** running in the UK in 2025 (against 249 closures since 2019), and **23.5 million music tourists** generated £10bn in tourism value in 2024 alone.

A clean "emissions per pound of value" comparison doesn't exist yet — the economic figures and the 1.2Mt estimate come from different years and different methodologies, and reconciling them properly is its own piece of work. But at this scale, "nobody's quite measuring it properly" isn't a comforting answer. It's the problem.

*(The April 2022 red diesel reform, which pushed most commercial event fuel bills up by roughly 50%, is covered in the cost of fossil-fuel generators piece — worth reading alongside this one.)*

---

## 6. The gap nobody's even measuring

Festival main-stage power has had a decade of published monitoring — Vision:2025, Julie's Bicycle, Powerful Thinking, A Greener Future. Food and drink vending at the same events hasn't been studied at all. There's no dedicated UK research quantifying catering-van or street-food generator emissions — just operator-forum anecdote, like the NCASS thread describing a typical 8–10kW genset burning around 4.5 litres an hour at 80% load. Run that through an 8-hour trading day and you land near **95 kg CO₂e per catering van, per day** — but that's a back-of-envelope estimate from one forum post, not a citable figure, and it should be flagged as such wherever it's used.

If the best-studied part of this industry has barely moved in a decade, the unstudied part isn't moving because nobody's watching it move at all.

---

## What this means

Strip away the framing and the sector's own numbers make an uncomfortable case: outdoor and mobile events power should be one of the easiest climate problems the UK has — no new chemistry, no furnace, no fuel with no substitute — and it's behaving like one of the hardest. Steel needed £1.25bn and a government grant just to get new kit in the ground by 2027/28. Event power needs a trailer, some panels, and someone willing to stop hiring the same 6kVA diesel genset out of habit.

The fix isn't a decade away. It's already parked outside the field.

**Running power at a festival, building site, or outdoor event next season?** We're taking bookings for beta rentals for 2027. Talk to us about swapping the generator for a SolarRola.

**[Contact sales →](/contact)**

---

**See also:** [Silent Kitchens](/blog/silent-kitchens-mobile-catering-diesel) (the mobile-catering version of this argument) · The daily cost of a generator (the red diesel reform and the number you can't forward-quote)

---

### References

1. Hope Solutions / ZAP Concepts, 2019 UK events-diesel factsheet — https://www.agreenerfestival.com/agfblog/report-uk-events-use-380m-litres-of-diesel-a-year/
2. Powerful Thinking / Julie's Bicycle — *The Show Must Go On* (Festival Vision:2025) — https://www.powerful-thinking.org.uk/resources/the-show-must-go-on-report/
3. Powerful Thinking — Glastonbury/Aggreko/UWE generator case study — https://www.powerful-thinking.org.uk/casestudy/glastonbury-festival/
4. House of Commons DCMS Select Committee — *The Future of UK Music Festivals* — https://publications.parliament.uk/pa/cm5802/cmselect/cmcumeds/49/4907.htm
5. A Greener Future — Annual Sustainability Report 2024 (via Bywaters) — https://www.bywaters.co.uk/sectors/events/how-festivals-can-become-more-eco-friendly
6. A Greener Future — *Carbon Counts Shift in 2025* (DEFRA factor update analysis) — https://www.agreenerfuture.com/blog-agf/carbon-counts-shift-in-2025-how-defras-updates-impact-the-events-sector
7. Powerful Thinking — red diesel reform analysis — https://www.powerful-thinking.org.uk/?p=2435
8. DEFRA/DESNZ 2025 GHG Conversion Factors (mineral diesel, 2.66 kg CO₂e/litre)
9. WEF — *Net-Zero Industry Tracker 2024* — https://www.weforum.org/publications/net-zero-industry-tracker-2024/cross-sector-findings-net-zero-tracker-2024/
10. Tata Steel Port Talbot EAF conversion — https://h2-view.com/story/tata-steel-and-uk-government-approve-electric-arc-furnace-deal-for-port-talbot
11. Global Cement & Concrete Association / GNR database (via Statista) — https://www.statista.com/statistics/1557699/cement-production-carbon-emissions-intensity
12. Parliament EAC — hard-to-decarbonise sectors report — https://publications.parliament.uk/pa/cm5804/cmselect/cmenvaud/404/report.html
13. Carbon Brief / DESNZ-NESO grid carbon-intensity analysis — https://www.resilience.org/?p=3506716
14. Gallery & Drakeley, 2026 — *The Value of the UK Outdoor Events Industry* — https://nectar.northampton.ac.uk/id/eprint/21124/1/Gallery_Drakeley_2026_The_Value_of_the_UK_Outdoor_Events_Industry.pdf
15. UK Music — *Hometown Glory* 2024 — music tourism value
16. NCASS operator forum — mobile catering generator sizing (illustrative only, not a published figure) — https://www.ukbusinessforums.co.uk/threads/generator-size-mobile-catering.419325/
17. Our World in Data — Malta country profile (1.73 Mt CO₂ in 2024, the comparison point for Malta's annual emissions) — https://ourworldindata.org/co2/country/malta
`,
  },

  {
    slug: "chef-tin-tin-solar-catering-trial",
    title: "Light-powered catering",
    subtitle:
      "Making off-grid catering a luxury experience — the technical trial at Chef Tin Tin HQ.",
    author: "Paul Marshall",
    published: true, // true = shown on the Blog page; false = hidden (see notes at the top of this file)
    date: "2026-10-06",
    readMinutes: 7,
    excerpt:
      "We wired the SolarRola into a working catering van's 32A mains inlet and ran a full service — oven, panini press, fridges, extractor, lights — on sun and stored sun. Then we tripped the breakers on purpose.",
    category: "Field Story",
    body: `This summer we powered an industrial espresso setup at [Volcano Coffee's roastery](/blog/solar-power-up-for-coffee-brews) in South London. Good result, but a coffee stall is a simple load. The obvious next question was the one prospects kept asking us: **can it run my whole van?**

A working catering van isn't a simple boil-and-grind cycle. It's a heating, cooling, breathing machine, and everything has to hold up for a full service.

So we booked a slot with [Chef Tin Tin](https://www.addtoevent.co.uk/suppliers/chef-tin-tin), wired the SolarRola into his van's 32A mains inlet, and worked the load up the way a real service does — quiet first, then busy, then flat-out. Then, because we still had time on the clock, we drove the system past its rated envelope on purpose to see whether the safety systems did what we designed them to do.

They did. Nothing burned. Nobody swore.

Here's the trial, with the numbers.

## 1. What we found on site

Chef Tin Tin runs a high-end mobile kitchen — the kind of setup where the customer expectation is "restaurant standard, in a field." He'd already made the industry's current "clean" move: converting his diesel generator to LPG. That's a real improvement over diesel. It's also a half-step, and he was already feeling the three reasons why.

**Supply.** LPG isn't widely stocked at UK forecourts. The mid-2010s push to make it more available has stalled — uptake never met projections. That means longer refuelling drives, more diesel burned by the van getting to the LPG station, and more downtime.

**Cost.** LPG has taken an ~11% price hit at the pump in the last year, on top of the diesel needed to fetch the cylinder. Depending on the route, that's roughly a 20% real-terms increase on last year's costs. A 6-hour shift running a 7 kW LPG genny lands at **£20–£30 in fuel a day** — before the cylinder-fetch round trip.

**Step-load response.** The bit the spec sheet doesn't mention: LPG engines sag when you ask them for a sudden load. Flip on the panini press or the water heater and the RPM dips, frequency drops for a beat, then the governor catches up. Diesels handle transient step loads more forgivingly; LPG conversions live one step further from ideal. That matters when your kitchen is running compressors, thermostats and resistive slap loads all on the same supply. Guests notice when the lights dim.

The kit works. It just doesn't get any better from here.

## 2. What we did — the trial

We turned up in an ordinary car, dropped the SolarRola in the driveway, deployed the solar array in under a minute, and connected the inverter to the van's 32A input socket. Safety checks first, then we built the load up one appliance at a time.

| Component | Startup order | Rated power |
| :-: | :-: | :-: |
| Panini machine | 1 (group 1) | 2,000 W |
| Double fridge | 2 (group 1) | 200 W |
| LED lights | 3 (group 2) | 50 W |
| Extractor fans | 4 (group 2) | 100 W |
| Water heater | 5 (group 1) | 1,000 W |
| Oven | 6 (group 1) | 2,500 W |

*Components in the order we powered them on.*

The headline numbers look scary. Summed on the label, we're at nearly 6 kW rated — enough to drain the battery in under an hour if it all pulled continuously against the panel input.

But that's not what actually happens. Group 1 appliances (panini, fridge, water heater, oven) draw their rated power only for a fraction of their on-time. Group 2 (lights, extractor) sits at a low, steady baseline.

Here's what the panini machine's draw looked like when we logged it on its own. The rated 2,000 W is never actually achieved — real-world peak sits around 1,800 W and lasts under three minutes, then drops to 10–20 W for around six minutes, then repeats. Every group 1 component follows a version of this cycle. The panini has the shortest, the double fridge has the longest, with power near-zero for most of it.

**That's the tell against the LPG genny.** On our inverter, the panini's start-up is a clean step. On an LPG conversion, it would be a step *plus a dip* while the engine caught up. Silent versus visible on the graph.

The result: our battery burn rate was far lower than the rated numbers would suggest. We took our time between appliance startups to isolate any faulty draw, and over an hour we built up to running every component Chef Tin Tin would need for a full service. Peak sat well under the SolarRola's 5.24 kW rated output. Everything cooked, refrigerated, extracted, and lit itself for the trial duration on sun and battery only. No fuel. No fumes. No engine noise — just the extractor and the fridge compressors doing their normal jobs.

## 3. Pushing past the limit — on purpose

With time still on the booking, we deliberately drove the system past its rated envelope to see whether the safety systems worked the way we designed them to.

We opened the fridges (peak compressor draw). We shaded the panels (kills solar input, forces battery-only). We stacked loads. Current climbed. At **103A** — three amps over our self-imposed 100A limit — the overcurrent breaker tripped clean. The inverter shut down its AC output, the battery stayed protected, nothing downstream took damage. We reset, brought the load back inside the rated envelope, and everything came back up.

Anything can be broken. What matters is that **it fails predictably and safely.** That's not a marketing line — it's the whole point of a beta programme. Every generator on a site right now has, in principle, overcurrent protection. The difference between a spec sheet and a piece of equipment is whether the protection actually behaves when you push it. We now know ours does, because we made it.

## 4. What changed at the counter

The subtitle of this piece is "making off-grid catering a luxury experience." The trial was the proof.

**Silence.** The LPG genny it replaced sits at roughly 76 dBA at 1m. That's under the HSE's 80 dBA lower action level for the operator standing next to it, but well above the level at which a customer at the hatch can hold a normal conversation. With the genny off, the counter noise floor dropped to the extractor fan and the ambient. Customers could hear their orders. Staff could hear each other. Nobody had to shout.

**No fumes.** Nothing being inhaled by staff. Nothing drifting over the food service window. Nothing to explain away to a customer with a nose.

**No refuelling anxiety.** No cylinder to fetch. No fuel to spill or store. Nothing to switch off before an evening booking hits the 11pm curfew that many venue licences set.

That's the "luxury experience" bit. It isn't a marketing angle — it's a description of what a service actually looks like when the noisiest, smelliest, most flammable thing on the pitch isn't there.

## 5. What it cost — and what it saved

- **Running cost for the trial day: £0.00.**
- **Direct fuel saving vs the LPG genny for the session: ~£10, and ~15 kg CO₂e avoided.**

Scale that to Chef Tin Tin's typical operating pattern — call it a 100-day season of three-day weekend bookings, at a six-hour service a day — and the saving compounds:

| Line | Annual value |
| :-: | :-: |
| LPG fuel saved (£20–£30 a day) | **~£2,000–£3,000** |
| CO₂e avoided (~30 kg a day) | **~3,000 kg** |
| Maintenance (no engine to service) | **~£300–£500** |
| Silent-generator hire fees at festivals no longer needed | **~£1,500–£5,000** |
| Fuel-price volatility exposure | **removed** |

The last line doesn't get a number, but it may be the most valuable one. Chef Tin Tin can now quote a corporate event a year out with confidence, because his input cost is fixed. The LPG version couldn't.

He'd still keep an LPG cylinder onboard for the deep-fat fryer, which runs directly on gas. But the fryer alone uses roughly half the LPG the genny did — so cylinder refills halve, and the burn time between them roughly doubles.

## 6. What this means

Chef Tin Tin's van is not a demo rig. It's a working kitchen. And on that trial day it ran a full service on solar and stored sun — while parked next to the LPG generator he'd already upgraded from diesel to try to get ahead of the regulations. He's now looked at both. Neither combustion option gets him where he needs to be by 2028. Ours does.

That's the sentence we've been trying to earn the right to write for a year.

**Running a catering van, food truck, or event kitchen?** We're taking bookings for beta rentals for the 2027 season. Talk to us about swapping your generator for a SolarRola.

**[Contact sales →](/contact)**

### References

- HSE — Control of Noise at Work Regulations 2005 (80/85/87 dBA action levels). https://www.hse.gov.uk/noise/regulations.htm
- MobCater — *How Much Does an LPG Generator Cost to Run? UK 2026.* https://mobcater.com/lpg-generator-running-cost-per-hour-uk/
- See also: [Solar power-up for coffee brews](/blog/solar-power-up-for-coffee-brews) (the earlier trial on an industrial espresso setup) · [Silent Kitchens](/blog/silent-kitchens-mobile-catering-diesel) (why mobile catering is running out of time on diesel) · The daily cost of a generator (the full diesel/LPG/petrol economics)
`,
  },
];

// Only the posts that are switched on.
export const publishedBlogs = blogs.filter((p) => p.published);

export default blogs;
