import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutExperienceService {
arrExp: any[] = [
  {
    number: 1,
    title: 'PICO CTF, HACKTHEBOX, TRYHACKME',
    date: 'Present',
    rol: 'Contestant',
    description: 'Weekly problem set solver on many CTF and coding platforms. I have solved 26 Problem Sets at the time on Pico CTF, most likely related to Cryptography, reverse engineering and forensics in a way to acquire experience.'
  },
  {
    number: 2,
    title: 'CYBER APOCALYPSE, HACK THE BOX CTF',
    date: '04/2021',
    rol: 'Contestant',
    description: 'Successfully solved four challenges on the last day of the contest, the challenges picked were related to cryptography and reverse engineering.'
  },
  {
    number: 3,
    title: 'CODING CUP 2021, TECNM (TECNOLÓGICO NACIONAL DE MÉXICO)',
    date: '04/2021',
    rol: 'Contestant',
    description: 'The team solved problem sets related to combination and permutation making use of iterative and recursive algorithms, while taking care of the memory allocation and running time (Memory Limit 36 MiB).'
  }
]
  constructor() { 
  }
  getArray(){
    return this.arrExp;
  }
}
