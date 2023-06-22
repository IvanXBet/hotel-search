import { FilterFormProps } from "./FilterForm.interface";

import { Card } from "../Card/Card";
import { Button, Input } from "../UI";

export const FilterForm = ({ className }: FilterFormProps) => {
  return (
    <Card className={className}>
      <form>
        <Input value="Москва" label="Локация" />
        <Input value="10.05.2001" label="Дата заселения" />
        <Input value="1" label="Количество дней" />
        <Button>Найти</Button>
      </form>
    </Card>
  );
};
