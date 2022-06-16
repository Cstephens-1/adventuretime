class RenameNameToCharName < ActiveRecord::Migration[6.1]
  def change
    rename_column :characters, :name, :char_name
  end
end
