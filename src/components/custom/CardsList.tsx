import React from 'react';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import cardsData from '@/data/cards.json';

export default function CardsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cardsData.map((card) => (
        <Card key={card.id} title={card.title}>
          <CardHeader>{card.title}</CardHeader>
          <CardDescription>{card.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
}
