#!/usr/bin/env node
/**
 * GÉNÉRATEUR DE PAGES SEO ULTRA-OPTIMISÉES
 * Architecture SEO on-site niveau senior
 * - Contenu unique et différencié par ville
 * - Maillage interne stratégique
 * - Schema.org exhaustif
 * - FAQ optimisée pour IA et vocal
 * - Structure anti-cannibalisation
 */

const fs = require('fs');
const path = require('path');

// Configuration complète des villes avec données enrichies
const cities = [
  // IDF - Priorité 1
  { name: 'Versailles', slug: 'versailles', dept: '78', deptName: 'Yvelines', region: 'Île-de-France', lat: 48.8049, lng: 2.1204, pop: 85000, prefix: 'PR7800', 
    nearby: ['Le Chesnay', 'Viroflay', 'Vélizy-Villacoublay'], 
    specificity: 'château et centre historique classé UNESCO', 
    parking: 'parkings souterrains du centre-ville et château',
    delai: '30-60 minutes',
    particularite: 'rues étroites du centre historique',
    wikidata: 'Q621' },
  
  { name: 'Nanterre', slug: 'nanterre', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8925, lng: 2.2069, pop: 96000, prefix: 'PR9200',
    nearby: ['Rueil-Malmaison', 'Courbevoie', 'Puteaux'],
    specificity: 'quartier d\'affaires La Défense et université',
    parking: 'parkings de La Défense, université et préfecture',
    delai: '20-40 minutes',
    particularite: 'forte densité de parkings souterrains',
    wikidata: 'Q193438' },
  
  { name: 'Boulogne-Billancourt', slug: 'boulogne-billancourt', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8352, lng: 2.2403, pop: 121000, prefix: 'PR9200',
    nearby: ['Issy-les-Moulineaux', 'Meudon', 'Sèvres'],
    specificity: 'ancienne zone industrielle Renault reconvertie',
    parking: 'parkings résidentiels et souterrains nombreux',
    delai: '20-40 minutes',
    particularite: 'nombreux immeubles avec parkings souterrains',
    wikidata: 'Q193474' },
