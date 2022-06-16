class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :char_name, :savepoint
  has_one :user
end
