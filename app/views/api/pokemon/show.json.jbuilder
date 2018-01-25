json.pokemon @pokemon, :id, :name, :attack, :defense, :moves, :poke_type,
             :image_url, :item_ids

json.set! :items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.(item, :id, :name, :pokemon_id, :price, :happiness, :image_url)
    end
  end
end
