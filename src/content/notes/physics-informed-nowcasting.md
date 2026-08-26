---
layout: layouts/note.njk
title: Physics-informed attention for radar nowcasting
date: 2024-11-08
tags: [machine-learning, weather, research]
readingTime: 5 min
summary: Combining advection physics with Attention-ConvLSTM models can improve short-term precipitation forecasts.
---

Radar extrapolation is a spatiotemporal prediction problem: given a sequence of recent radar frames, estimate where precipitation will move next. ConvLSTM models can learn these dynamics, but purely data-driven predictions do not always respect the physical structure of the system.

My University of Exeter research introduced physical regularisation and attention into the forecasting pipeline. The physical term encourages plausible advection, while attention helps the model focus on the most informative regions and time steps.

```text
radar sequence → ConvLSTM → attention → forecast
                       ↘ physics-informed loss ↗
```

Across the experiments, the physics-informed variants improved SSIM and MAE over the baseline ConvLSTM and generalized more reliably to complex motion.

[See the research posts on LinkedIn](https://www.linkedin.com/in/sushenyadav/recent-activity/all/).

