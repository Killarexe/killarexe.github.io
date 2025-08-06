---
title: "SPU"
draft: false
showDate: true
showAuthor: true
date: 2023-04-28T00:00:00Z
featured: true
---

# About

The SPU *(or Simple Processing Unit)* is a small custom 16-bit CPU I made inspired by the famous 6502.

The main goal of this CPU is to be the easiest CPU to use. The SPU have only **16 instructions** as follows:

## SPU Instruction Set

| Instruction | Argument   | What it does                                        |
| ----------- | ---------- | --------------------------------------------------- |
| ADD         | None       | Do X + Y and return the value to X.                 |
| SUB         | None       | Do X - Y and return the value to X.                 |
| AND         | None       | Do X & Y and return the value to X.                 |
| OR          | None       | Do X or Y and return the value to X.                |
| XOR         | None       | Do X ^ Y and return the value to X.                 |
| NOT         | None       | Inverse the X register.                             |
| LDX         | im12/adr12 | Change the value of X.                              |
| LDY         | im12/adr12 | Change the value of Y.                              |
| STX         | adr12      | Store the X register to the ram address.            |
| STY         | adr12      | Store the Y register to the ram address.            |
| JMP         | adr12      | Jump to the label/address.                          |
| JIC         | adr12      | Jump to the label/address if the carry flag is set. |
| JIZ         | adr12      | Jump to the label/address if the zero flag is set.  |
| HLT         | None       | Stops the proccessor.                               |

I made an Assembler in Rust and **made the full CPU circuit in Logisim Evolution**. I didn't made an emulator beacause I was too lazy... But it was a cool project to make.

Here is an exemple program witch do the fibonacci sequence:

```asm
/*
  Do the fibonacci sequence.
  The end result goes into the ram address $0001.
*/

;Init variables
ldx 0
stx $0001   ; prev1 = 0
ldx 1
stx $0002   ; prev2 = 1
ldx 9
stx $0000   ; n = 9

loop:
  ldy 3
  sub
  ldy 128
  add
  jic stop  ; if n < 3 { stop(); }

  ldx $0002
  ldy $0001
  add
  sty $0002 ; prev2 = prev1
  stx $0001 ; prev1 = prev2 + prev1

  ldx $0000
  ldy 1
  sub
  stx $0000 ; n -= 1

  jmp loop
stop:
  hlt

```

For the frenchies I made a video about how I made the assembler:

{{< youtube id="s35ix5jCseE" label="SPU Assembler" >}}

# Assembler repo

{{< github repo="Killarexe/SPU-Assembler" >}}
