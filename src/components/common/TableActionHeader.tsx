import React from "react";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";

interface TableActionHeaderProps {
  title: string;
  onSearch?: (term: string) => void;
  onNew?: () => void;
  newButtonText?: string;
  onExport?: () => void;
  loading?: boolean;
}

export const TableActionHeader: React.FC<TableActionHeaderProps> = ({
  title,
  onSearch,
  onNew,
  newButtonText = "Nuevo",
  onExport,
  loading = false,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
        {title}
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {onSearch && (
          <div className="w-full sm:w-64">
            <Input
              type="text"
              placeholder="Buscar..."
              onChange={(e) => onSearch(e.target.value)}
              className="h-10"
            />
          </div>
        )}

        <div className="flex gap-2">
          {onExport && (
            <Button variant="outline" onClick={onExport} disabled={loading}>
              Exportar
            </Button>
          )}

          {onNew && (
            <Button onClick={onNew} disabled={loading}>
              {newButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
