---
title: "SPU"
draft: false
showDate: true
showAuthor: true
date: 2023-04-28T00:00:00Z
---

# A propos

Le SPU *(**S**imple **P**rocessing **U**int)* est un petit processeur 16-bit que j'ai fait très inspiré par le processeur 6502.

L'objectif principal de ce processeur est d'être un processeur facile à utiliser. Ce processeur a que **16 instructions**.

## Set d'instructions du SPU

| Instruction | Argument   | Ce qu'il fait                                        |
| ----------- | ---------- | --------------------------------------------------- |
| ADD         | Rien       | Fait X + Y et retourne le resultat à X.                 |
| SUB         | Rien       | Fait X - Y et retourne le resultat à X.                 |
| AND         | Rien       | Fait X & Y et retourne le resultat à X.                 |
| OR          | Rien       | Fait X \| Y et retourne le resultat à X.                |
| XOR         | Rien       | Fait X ^ Y et retourne le resultat à X.                 |
| NOT         | Rine       | Inverse le registeur X.                             |
| LDX         | im12/adr12 | Change la valeur de X.                              |
| LDY         | im12/adr12 | Change la valeur de Y.                              |
| STX         | adr12      | Met la valeur du registeur X dans l'adresse ram.            |
| STY         | adr12      | Met la valeur du registeur X dans l'adresse ram.            |
| JMP         | adr12      | Sauter au label/adresse.                          |
| JIC         | adr12      | Sauter au label/adresse si le carry flag est active. |
| JIZ         | adr12      | Sauter au label/adresse si le zero flag est active.  |
| HLT         | Rien       | Arrète le proccesseur.                               |

I made an Assembler in Rust and **made the full CPU circuit in Logisim Evolution**. I didn't made an emulator beacause I was too lazy... But it was a cool project to make.

J'ai fait un assembleur en rust, et **fait le processeur entier sur Logisim Evolution**. Et j'ai pas d'emulateur car j'avais la flemme... Mais c'était un projet très cool à faire.

Ici un programme d'exemple qui fait la séquance de fibonacci:

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

J'ai fait une vidéo sur YouTube de comment j'ai l'assembleur:

{{< youtube id="s35ix5jCseE" label="SPU Assembler" >}}

# Assembler repo

{{< github repo="Killarexe/SPU-Assembler" >}}
